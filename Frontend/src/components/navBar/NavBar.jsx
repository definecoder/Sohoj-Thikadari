import "./NavBar.css";
import navLogo from "../../assets/appLogo.png";

export default function NavBar() {

    return <>
        <div className="navCanvas">
            <div className="navLogo"><img src={navLogo} alt="" /></div>
            <div className="navRightContainer">
                <div className="navElement"> ড্যাশবোর্ড </div>
                <div className="navElement"> ফার্মসমূহ </div>
                <div className="navButton"> লগআউট </div>
            </div>
        </div>
    </>;

}