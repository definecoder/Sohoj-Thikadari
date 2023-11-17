import "./LoginPage.css";

import LandingAiLogo from "../../assets/landingAiLogo.jpeg";
import AppLogo from "../../assets/appLogo.png";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ForgetPasswordModal from "./ForgetPasswordModal";

function LoginPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="loginPageRoot">
        <ForgetPasswordModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
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
