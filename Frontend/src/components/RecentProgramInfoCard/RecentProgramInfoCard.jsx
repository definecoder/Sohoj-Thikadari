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
}) {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
   sendingDate = new Date(sendingDate).toLocaleDateString("bn-BD", options);
   programDate = new Date(programDate).toLocaleDateString("bn-BD", options);
  return (
    <>
      <div
        className="recent-program-card"
        onClick={() => {
          alert(invoiceNo);
        }}
      >
        <div className="recent-program-card-header">
          <div className="recent-program-card-header-left">
            প্রোগ্রাম নংঃ &nbsp;{" "}
            <span className="program-no-style">{programNo}</span>
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
          <div className="recent-program-card-footer-right">
            {status}
          </div>
        </div>
      </div>
    </>
  );
}
