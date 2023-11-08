// TODO : ADD BG
import "./LoginPage.css";

import LandingAiLogo from "../../assets/landingAiLogo.jpeg";
import AppLogo from "../../assets/appLogo.png";
import LoginForm from "./LoginForm";

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
