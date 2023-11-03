import { useLocation } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";

import "./HomePage.css";

export default function HomePage() {

    // getting uid from login or signup :v
    //console.log(useLocation().state?.user);

    return <>
        <NavBar />
        <div className="home-canvas">
            
            <div className="home-news-canvas"></div>
            <div className="home-right-canvas">
                <div className="home-profile-canvas"></div>    
                <div className="home-content-canvas">
                    <div className="home-recent-program-canvas"></div>
                    <div className="home-user-status-canvas"></div>
                </div>

            </div>            

        </div>
    </>;

}