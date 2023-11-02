import DarkButton from "../../components/darkButton/DarkButton";
import { useState } from "react";
import { Input, Space, Switch } from "antd";
import { Navigate, useNavigate } from "react-router-dom";

const signupForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    phone: "",
    email:"",
    password: "",
    confirmPassword: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    if (
      e.target.name === "phone" &&
      !(
        typeof Number(e.target.value) === "number" &&
        !Number.isNaN(Number(e.target.value))
      )
    )
      return;
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!user.username) alert("ইউজারনেম দিন");    
    else if (!user.phone) alert("ফোন নম্বর দিন");
    else if(!user.email) alert("ইমেইল দিন");
    else if (!user.password) alert("পাসওয়ার্ড দিন");
    else if(user.password !== user.confirmPassword) alert("পাসওয়ার্ড দুইটি একই হয়নি");
    else {
      var retVal = {        
        username: user.username,
        phone: user.phone,
        email: user.email,
        password: user.password
      };
      alert(JSON.stringify(retVal));
      navigate("/home", {state: {
        uid: 1,
      }});
    }
  };

  return (
    <div>
      <form className="signupForm" onSubmit={handleSubmit}>
        
        <div className="signup-form-row">
          <Space direction="horizontal">
            <label htmlFor="name" className="signup-form-label">
              ইউজারনেম
            </label>
            <Input
              size="large"
              placeholder="আপনার ইউজারনেম দিন"
              className="signup-form-input"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </Space>
        </div>

        <div className="signup-form-row">
          <Space direction="horizontal">
            <label htmlFor="name" className="signup-form-label">
              ফোন নম্বর
            </label>
            <Input
              size="large"
              placeholder="ফোন নম্বর দিন"
              className="signup-form-input"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          </Space>
        </div>

        <div className="signup-form-row">
          <Space direction="horizontal">
            <label htmlFor="name" className="signup-form-label">
              ইমেইল
            </label>
            <Input
              size="large"
              placeholder="আপনার ইমেইল দিন"
              className="signup-form-input"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </Space>
        </div>

        <div className="signup-form-row">
          <Space direction="horizontal">
            <label htmlFor="password" className="signup-form-label">
              পাসওয়ার্ড
            </label>
            <Input.Password
              size="large"
              placeholder="পাসওয়ার্ড দিন"
              className="signup-form-input"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              visibilityToggle={{
                onVisibleChange: setPasswordVisible,
              }}
            />
          </Space>
        </div>

        <div className="signup-form-row">
          <Space direction="horizontal">
            <label htmlFor="password" className="signup-form-label">
              পাসওয়ার্ড নিশ্চায়ন
            </label>
            <Input.Password
              size="large"
              placeholder="পুনরায় আপনার পাসওয়ার্ড দিন"
              className="signup-form-input"
              id="confirmPassword"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              visibilityToggle={{
                onVisibleChange: setPasswordVisible,
              }}
            />
          </Space>
        </div>

        <div className="registerbtn">
        <DarkButton
          buttonText="রেজিস্টার করুন"
          onClick={() => {}}
          routePath="forbidden"
          type="submit"
        />
        </div>
      </form>
    </div>
  );
};

export default signupForm;
