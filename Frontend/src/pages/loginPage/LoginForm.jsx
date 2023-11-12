import DarkButton from "../../components/darkButton/DarkButton";
import { useState } from "react";
import { Input, Space, Switch } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import axios from "axios";

const LoginForm = () => {
  /// fOR MODAL
  const [modalText, setModalText] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalRoute, setModalRoute] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (route) => {
    setIsModalOpen(false);
    if (route) {
      navigate(route, {
        state: {
          user,
        },
      });
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  /// fOR MODAL

  const navigate = useNavigate();
  const [user, setUser] = useState({
    phone: "",
    password: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.phone) alert("ফোন নম্বর দিন");
    else if (!user.password) alert("পাসওয়ার্ড দিন");
    else {
      //console.log("hello");
      //alert(JSON.stringify(user));
      try {
        const response = await axios.post(
          "http://localhost:8888/api/v1/auth/login",
          user
        );
        console.log(response);
        setModalText(`Congratulations! Press OK to go to home page`);
        localStorage.setItem("token", "Bearer " + response.data.token);
        setModalTitle("Your login is successfull");
        setModalRoute("/home");
        showModal();
      } catch (error) {
        setModalText(error.response.data.msg);
        setModalTitle("An Error Occured");
        setModalRoute(null);
        showModal();

        //alert(error);
      }
    }
  };

  return (
    <div>
      {/* fOR MODAL*/}
      <Modal
        title={modalTitle}
        open={isModalOpen}
        footer={[
          <Button
            type="primary"
            key="button"
            onClick={() => {
              handleOk(modalRoute);
            }}
          >
            OK
          </Button>,
        ]}
        closeIcon={null}
        // onOk={() => {
        //   handleOk(modalRoute);
        // }}
        // onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
      {/* fOR MODAL*/}
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
