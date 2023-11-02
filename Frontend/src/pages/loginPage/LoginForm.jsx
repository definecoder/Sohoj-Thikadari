import DarkButton from "../../components/darkButton/DarkButton";
import { useState } from "react";
import { Input, Space, Switch } from "antd";
import { Navigate, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    phone: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    if(e.target.name === "phone" && !(typeof Number(e.target.value) === 'number' && !Number.isNaN(Number(e.target.value)))) return;
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.phone) alert("ফোন নম্বর দিন");
    else if (!user.password) alert("পাসওয়ার্ড দিন");
    else {
      alert(JSON.stringify(user));
      navigate("/home", {state: {
        uid: 1,
      }});
    }
  };

  return (
    <div>
      <form className="loginForm" onSubmit={handleSubmit}>
          {/* name */}
          <label htmlFor="name" className="login-form-label">
            ফোন নম্বর
          </label>
          <div className="login-form-row">
            <Space direction="vertical">
              <Input
                size="large"
                placeholder="ফোন নম্বর দিন"
                className="login-form-input"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
            </Space>
          </div>
          {/* password */}
          <label htmlFor="password" className="login-form-label">
            পাসওয়ার্ড
          </label>
          <div className="login-form-row">
            <Space direction="horizontal">
              <Input.Password
                size="large"
                placeholder="পাসওয়ার্ড দিন"
                className="login-form-input"
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

          <DarkButton
            buttonText="প্রবেশ করুন"
            onClick={() => {}}
            routePath="forbidden"
            type="submit"
          />
        </form>
    </div>
  );
};

export default LoginForm;
