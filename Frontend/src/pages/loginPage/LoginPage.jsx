// TODO : ADD BG
import "./LoginPage.css";

import LandingAiLogo from "../../assets/landingAiLogo.jpeg";
import AppLogo from "../../assets/appLogo.png";
import LoginForm from "./LoginForm";
import InputTextField from "../../components/inputs/textField/InputTextField";
import PasswordField from "../../components/inputs/passwordField/PasswordField";

function LoginPage() {
  return (
    <>
      <div className="loginPageRoot">
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
          <div className="wantToRegister"> সহজ ঠিকাদারী তে নতুন? <span className="wantToRegisterBtn"> রেজিস্টার করুন </span></div>
          {/* <div className="loginForm">
            <span>ইমেইল অথবা ইউজারনেম</span>
            <InputTextField
              inputLabel="আপনার ইমেল অথবা ইউজারনেম দিন"
              fieldName="emailusername"
            />
            <div></div>
            <span className="passwordTitle">পাসওয়ার্ড</span>
            <PasswordField
              inputLabel="পাসওয়ার্ড প্রদান করুন"
              fieldName="password"
            />
          </div> */}
          <LoginForm />   
          <div>
            পাসওয়ার্ড ভুলে গেছেন? এখানে <b>ক্লিক করুন</b>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
