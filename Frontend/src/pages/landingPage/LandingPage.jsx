// TODO : ADD BG
import "./LandingPage.css";

import DarkButton from "../../components/darkButton/DarkButton";
import landingLogo from "../../assets/appLogo.png";
import landingAiLogo from "../../assets/landingAiLogo.jpeg";

function LandingPage() {
  return (
    <>
    <div className="landingPageCanvas">
      <div className="landingAiLogo">
      <img
            src={landingAiLogo}
            alt="Description of the image"
            className="landingAiLogo"
          />
      </div>
      <div className="LandingPageRight">
        <div className="paddingUpLanding"></div>
        <div>
          <img
            src={landingLogo}
            alt="Description of the image"
            className="LandingLogo"
          />
        </div>
        <div className="landingLogoSpacing"></div>
        <div className= "landingPageTitle">সহজ ঠিকাদারী তে আপনাকে স্বাগতম</div>
        <div className="landingTitleSpacing"></div>
        <div className= "landingPageSubTitle">সহজ ঠিকাদারী তে আপনাকে স্বাগতম</div>
        <div className="landingTitleSpacing"></div>
        <div className="landingPageButtonContainer">
          <DarkButton
            buttonText="প্রবেশ করুন"
            onClick={() => {}}
            routePath="/login"
          />
          <DarkButton
            buttonText="নিবন্ধন করুন"
            onClick={() => {}}
            routePath="/signup"
          />
        </div>
      </div>
      </div>
    </>
  );
}

export default LandingPage;
