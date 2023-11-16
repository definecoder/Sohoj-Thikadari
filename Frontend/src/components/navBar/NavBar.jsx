import "./NavBar.css";
import navLogo from "../../assets/appLogo.png";

import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="navCanvas">
        <div
          onClick={() => {
            navigate("/home");
          }}
          className="navLogo"
        >
          <img src={navLogo} alt="" />
        </div>

        <div className="navRightContainer">
          <div
            className="navElement"
            onClick={() => {
              navigate("/home");
            }}
          >
            <HomeIcon fontSize="large" />
            <span className="dashboadNavText">ড্যাশবোর্ড</span>
          </div>

          <div
            className="navElement"
            onClick={() => {
              navigate("/firms");
            }}
          >
            <FormatListBulletedIcon fontSize="large" />
            <span className="firmsNavText">ফার্মসমূহ</span>
          </div>

          <div
            className="navButton"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            <LogoutIcon fontSize="large" />
            <span className="logoutNavText">লগআউট</span>
          </div>
        </div>
      </div>
    </>
  );
}
