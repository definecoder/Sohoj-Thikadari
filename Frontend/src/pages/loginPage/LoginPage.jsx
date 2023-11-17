// TODO : ADD BG
import "./LoginPage.css";

import LandingAiLogo from "../../assets/landingAiLogo.jpeg";
import AppLogo from "../../assets/appLogo.png";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { Modal, Input, message, Button, Form } from "antd";
import Countdown from "react-countdown";
import { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInput, setModalInput] = useState("");
  const [modaTitle, setModalTitle] = useState("Enter your Email");
  const [modalState, setModalState] = useState("email");
  const [loading, setLoading] = useState(false);

  const handleUpdateOk = async (values) => {
    console.log(values.confirm);
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8888/api/v1/auth/updatepassword",
        { password: values.confirm },
        {
          headers: { Authorization: localStorage.getItem("otptoken") },
        }
      );

      message.success("Password Changed Successfully");
      setLoading(false);
      setModalInput("");
      setIsModalOpen(false);
      setModalTitle("Enter your Email");
      setModalState("email");
    } catch (error) {
      setLoading(false);
      message.error(error.response.data.msg);
    }
  };
  const handleOTPOk = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8888/api/v1/auth/validateotp",
        { otp: parseInt(modalInput) },
        {
          headers: { Authorization: localStorage.getItem("otptoken") },
        }
      );
      setLoading(false);
      setModalInput("");
      setModalTitle("Update Your Password");
      setModalState("password");
    } catch (error) {
      setLoading(false);
      message.error(error.response.data.msg);
    }
  };

  const handleForgetEmailOk = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8888/api/v1/auth/forgotpassword",
        {
          email: modalInput,
        }
      );
      localStorage.setItem("otptoken", "Bearer " + response.data.otptoken);
      setLoading(false);

      setModalTitle("Enter your OTP");
      setModalInput("");
      setModalState("otp");
    } catch (error) {
      setLoading(false);
      message.error(error.response.data.msg);
    }
  };

  const modalStateHandlers = {
    email: handleForgetEmailOk,
    otp: handleOTPOk,
    password: handleUpdateOk,
  };

  const modalStateContents = {
    otp: (
      <>
        <p>You have 5 minutes to enter OTP</p>
        <Countdown
          date={Date.now() + 50000}
          onComplete={() => {
            message.error("Time out for entering OTP");
            setModalState("email");
            setModalTitle("Enter your Email");
            setIsModalOpen(false);
          }}
        />
        <Input
          value={modalInput}
          onChange={(e) => {
            setModalInput(e.target.value);
          }}
        />
      </>
    ),
    email: (
      <Input
        value={modalInput}
        onChange={(e) => {
          setModalInput(e.target.value);
        }}
      />
    ),
    password: (
      <>
        <Form onFinish={handleUpdateOk}>
          <Form.Item
            label="Enter New Password"
            name="password"
            rules={[
              { required: true, message: "Please Enter Your New Password" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm New Password"
            name="confirm"
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    ),
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="loginPageRoot">
        <Modal
          open={isModalOpen}
          title={modaTitle}
          footer={
            modalState == "password"
              ? []
              : [
                  <Button
                    key="back"
                    onClick={() => {
                      setModalState("email");
                      setModalTitle("Enter your Email");
                      setModalInput("");
                      setIsModalOpen(false);
                    }}
                  >
                    Cancel
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    loading={loading}
                    onClick={modalStateHandlers[modalState]}
                  >
                    Submit
                  </Button>,
                ]
          }
        >
          {modalStateContents[modalState]}
        </Modal>
        <div className="loginLeft">
          <img
            src={LandingAiLogo}
            alt="Description of the image"
            className="loginLogoWrapper"
          />
        </div>
        <div className="loginRight">
          <div></div>
          <div>
            <img
              src={AppLogo}
              alt="Description of the image"
              className="AppLoginLogo"
            />
          </div>
          <div className="wantToRegister">
            {" "}
            সহজ ঠিকাদারী তে নতুন?{" "}
            <span
              className="wantToRegisterBtn"
              onClick={() => {
                navigate("/signup");
              }}
            >
              {" "}
              রেজিস্টার করুন{" "}
            </span>
          </div>
          <LoginForm />
          <div className="login-forgot-password">
            পাসওয়ার্ড ভুলে গেছেন? এখানে{" "}
            <b
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              ক্লিক করুন
            </b>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
