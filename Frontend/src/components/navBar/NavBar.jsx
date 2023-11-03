import "./NavBar.css";
import navLogo from "../../assets/appLogo.png";

import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LogoutIcon from '@mui/icons-material/Logout';

export default function NavBar() {

    return <>
        <div className="navCanvas">
            <div className="navLogo"><img src={navLogo} alt="" /></div>
            <div className="navRightContainer">
                <div className="navElement"> <HomeIcon fontSize="large"/> <span className="dashboadNavText">ড্যাশবোর্ড</span></div>
                <div className="navElement"> <FormatListBulletedIcon fontSize="large"/> <span className="firmsNavText">ফার্মসমূহ</span> </div>
                <div className="navButton"> <LogoutIcon fontSize="large"/> <span className="logoutNavText">লগআউট</span> </div>
            </div>
        </div>
    </>;

}