import NavBar from "../../components/navBar/NavBar";
import AddNewInvoiceFrom from "./AddNewIvoiceForm";
import "./addNewIvoicePage.css";
import { useLocation } from "react-router-dom";

export default function AddNewIvoicePage() {    

    //console.log(useLocation().state);

    return <>
        <NavBar />
        <div className="addnewprogram-canvas">
            <div className="addnewprogram-title">
                ইনভয়েস এর তথ্যসমূহ দিন
            </div>
            <AddNewInvoiceFrom />
        </div>
    </>;
}