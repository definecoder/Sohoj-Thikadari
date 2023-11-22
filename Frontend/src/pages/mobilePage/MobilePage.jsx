import "./MobilePage.css";
import landingLogo from "../../assets/appLogo.png";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function MobilePage() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleWindowResize = () => {
          console.log("Window width changed:", window.innerWidth);      
          if(window.innerWidth > 1020) {
            navigate(-1);
          }
        };
        window.addEventListener("resize", handleWindowResize);
        return () => {
          window.removeEventListener("resize", handleWindowResize);
        };
      }, []);

    return <>
        <div className="mobile-page-container">
        <img
            src={landingLogo}
            alt="Description of the image"
            className="LandingLogoMobile"
          />
        <div className="mobile-title">
            সহজ ঠিকাদারীতে স্বাগতম
        </div>
        <div className="mobile-sorry-text">
            এই ওয়েবসাইট টি বর্তমানে মোবাইলে ব্যবহারযোগ্য নয়। অতি শিঘ্রই এই সার্ভিসটি মোবাইলে আনার জন্য আমরা কাজ করছি।
        </div>        
        <div className="mobile-footer">
            আমাদের সাথে থাকার জন্য ধন্যবাদ।
        </div>
        </div>
    </>;

}