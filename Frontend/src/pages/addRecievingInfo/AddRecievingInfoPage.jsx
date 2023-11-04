import NavBar from "../../components/navBar/NavBar";
import AddRecievingInfoForm from "./AddRecievingInfoForm";
import "./AddRecievingInfoPage.css";
import { useLocation } from "react-router-dom";

export default function AddRecievingInfoPage() {    

    //console.log(useLocation().state);

    return <>
        <NavBar />
        <div className="addnewprogram-canvas">
            <div className="addnewprogram-title">
                প্রাপ্তির তথ্যসমূহ দিন
            </div>
            <AddRecievingInfoForm />
        </div>
    </>;
}