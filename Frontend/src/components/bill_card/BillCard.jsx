import { useNavigate } from "react-router-dom";
import "./BillCard.css";

export default function BillCard({ id, billNo, date, amount, firmID }) {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const formattedDate = new Date(date).toLocaleDateString("bn-BD", options);
  const navigate = useNavigate();
  const billID = id;
  return (
    <>
      <div
        className="bill-card"
        onClick={() => {
          navigate("/firm/" + firmID + "/bill/billDownloadPage", {
            state: {billID},
          });
        }}
      >
        <div className="bill-card-header">
          <div className="bill-card-header-left">
            <div className="bill-card-header-left-bill-no">বিল নংঃ</div>
            <div className="program-no-style">{billNo}</div>
          </div>
          <div className="bill-card-header-right">
            ৳ &nbsp;
            {amount}
          </div>
        </div>
        <div className="bill-card-footer">
          <div className="bill-card-footer-left">
            <b>তারিখঃ</b> &nbsp; {formattedDate}{" "}
          </div>
        </div>
      </div>
    </>
  );
}
