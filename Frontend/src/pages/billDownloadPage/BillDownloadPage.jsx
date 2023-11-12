import DarkButton from "../../components/darkButton/DarkButton";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import billImg from "../../assets/billLogo.png";

import "./BillDownloadPage.css";
import NavBar from "../../components/navBar/NavBar";
import { PDFDownloadLink } from "@react-pdf/renderer";
import BillPDF from "../../components/PdfGenerator/BillPDF";

export default function BillDownloadPage() {
  let { firmId } = useParams();
  const navigate = useNavigate();
  //const billData = useLocation().state?.newFirmInfo;
  const billID = useLocation().state?.billID;
  //console.log(billID);
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
            বিলটি ডাউনলোড করতে নিচের বাটনে ক্লিক করবেন
          </div>

          <PDFDownloadLink
            document={<BillPDF billID = {billID}/>}
            fileName="মুভমেন্ট রেজিস্টার.pdf"
          >
            {({ loading }) =>
              loading ? (
                "লোডিং..."
              ) : (
                <DarkButton
                  buttonText="ডাউনলোড করুন"
                  onClick={() => {
                    //alert(JSON.stringify(billData));
                    // navigate("/home", {
                    //   state: "no state",
                    // });
                  }}
                  routePath="forbidden"
                />
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
    </>
  );
}
