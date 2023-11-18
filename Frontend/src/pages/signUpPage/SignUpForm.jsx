import DarkButton from "../../components/darkButton/DarkButton";
import { useState } from "react";
import { Input, Space, Button } from "antd";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

const signupForm = () => {
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
          uid: 1,
        },
      });
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  /// fOR MODAL

  let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  // let emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    phone: "",
    email: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.username) message.error("ইউজারনেম দিন");
    else if (user.username.length < 4)
      message.error("ইউজারনেম নুন্যতম ৪ অক্ষরের হতে হবে");
    else if (!user.phone) message.error("ফোন নম্বর দিন");
    else if (user.phone.length !== 10) message.error("ফোন নম্বর সঠিক নয়");
    else if (!user.email) message.error("ইমেইল দিন");
    else if (!emailRegex.test(user.email)) message.error("ইমেইল সঠিক নয়");
    else if (!user.password) message.error("পাসওয়ার্ড দিন");
    else if (user.password.length < 6)
      message.error("পাসওয়ার্ড নুন্যতম ৬ অক্ষরের হতে হবে");
    else if (user.password !== user.confirmPassword)
      message.error("পাসওয়ার্ড দুইটি একই হয়নি");
    else {
      const retVal = {
        username: user.username,
        phone: "+880" + user.phone,
        email: user.email,
        password: user.password,
      };

      try {
        const response = await axios.post(
          "https://sohoj-thikadari-production.up.railway.app/api/v1/auth/register",
          retVal
        );
        setModalText(
          `Congratulations ${retVal.username}! Your registration is successful`
        );
        localStorage.setItem("token", "Bearer " + response.data.token);
        setModalTitle("Your registrations is successfull");
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
      >
        <p>{modalText}</p>
      </Modal>
      {/* fOR MODAL*/}

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
              addonBefore="+880"
            />
            {/* <Input
              size="large"
              placeholder="ফোন নম্বর দিন"
              className="signup-form-input"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            /> */}
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
