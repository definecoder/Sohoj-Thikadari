import { useNavigate } from "react-router-dom";
import "./RecentProgramInfoCard.css";

export default function RecentProgramInfoCard({
  programNo,
  programDate,
  sendingPoint,
  receivingPoint,
  sendingNetSlack,
  sendingDate,
  status,
  commodity,
  invoiceNo,
  route,
}) {
  const navigate = useNavigate();
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  sendingDate = new Date(sendingDate).toLocaleDateString("bn-BD", options);
  programDate = new Date(programDate).toLocaleDateString("bn-BD", options);
  return (
    <>
      <div
        className="recent-program-card"
        onClick={() => {
          route ? navigate(route) : navigate("/program/" + invoiceNo);
        }}
      >
        <div className="recent-program-card-header">
          <div className="recent-program-card-header-left">
            ইনভয়েস নংঃ &nbsp;{" "}
            <span className="program-no-style">{invoiceNo}</span>
          </div>
          <div className="recent-program-card-header-right">{programDate}</div>
        </div>
        <div className="recent-program-card-title">
          {sendingPoint} - {receivingPoint}
        </div>
        <div className="recent-program-card-footer">
          <div className="recent-program-card-footer-left">
            <b>{sendingNetSlack} বস্তা</b> - &nbsp; <i>{commodity}</i>
            <br /> <b>প্রেরনঃ</b> &nbsp; {sendingDate}{" "}
          </div>
          <div className="recent-program-card-footer-right">{status}</div>
        </div>
      </div>
    </>
  );
}
