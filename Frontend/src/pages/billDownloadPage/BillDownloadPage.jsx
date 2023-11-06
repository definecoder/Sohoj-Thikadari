import DarkButton from "../../components/darkButton/DarkButton";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import billImg from "../../assets/billLogo.png";

import "./BillDownloadPage.css";
import NavBar from "../../components/navBar/NavBar";

export default function BillDownloadPage() {
  let { firmId } = useParams();
  const navigate = useNavigate();
  const billData = useLocation().state;
  console.log(billData.invoices);
  return (
    <>
      <NavBar />
      <div className="billdownloadpage-canvas">
        <div className="billdownloadpage-main-section">
          <div className="billdownload1">অভিনন্দন!</div>
          <div className="billdownload2">
            <img src={billImg} className="billdownload2" alt="" />
          </div>
          <div className="billdownload3">আপনার বিল তৈরি সম্পন্ন হয়েছে!</div>
          <div className="billdownload4">
            বিলটি আবার ডাউনলোড করতে আমার বিলসমূহ অপশন এ যাবেন
          </div>

          <DarkButton
            buttonText="ডাউনলোড করুন"
            onClick={() => {
              //alert(JSON.stringify(employeeData));
              navigate("/home", {
                state: "no state",
              });
            }}
            routePath="forbidden"
          />
        </div>
      </div>
    </>
  );
}
