import DarkButton from "../../components/darkButton/DarkButton";
import { useState } from "react";
import { Input, Space, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    phone: "",
    password: "",
  });
  const [setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    if(e.target.name === "phone" && e.target.value === '+') {}
    else if (
      e.target.name === "phone" && !(
        typeof Number(e.target.value) === "number" &&
        !Number.isNaN(Number(e.target.value))
      ) 
      
    )
      return;
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.phone) message.info("ফোন নম্বর দিন");
    else if (!user.password) message.info("পাসওয়ার্ড দিন");
    else {
      //console.log("hello");
      //alert(JSON.stringify(user));
      try {
        const response = await axios.post(
          "http://localhost:8888/api/v1/auth/login",
          user
        );
        console.log(response);
        localStorage.setItem("token", "Bearer " + response.data.token);

        message.success("Congratulations! Login Successful");
        navigate("/home", {
          state: {
            user,
          },
        });

        // setModalText(`Congratulations! Press OK to go to home page`);

        // setModalTitle("Your login is successfull");
        // setModalRoute("/home");
        // showModal();
      } catch (error) {
        message.error(error.response.data.msg);
        // setModalText();
        // setModalTitle("An Error Occured");
        // setModalRoute(null);
        // showModal();

        //alert(error);
      }
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
