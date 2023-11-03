import "./RecentProgramInfoCard.css";

export default function RecentProgramInfoCard({programNo,programDate,sendingPoint, recievingPoint, noOfSlacks, sendingDate, programStatus, comodity, programId}) {    
  return (
    <>
      <div className="recent-program-card" onClick={() => {alert(programId)}}>    
        <div className="recent-program-card-header">
        <div className="recent-program-card-header-left">প্রোগ্রাম নংঃ &nbsp; <span className="program-no-style">{programNo}</span></div>
        <div className="recent-program-card-header-right">{programDate}</div>
        </div>
        <div className="recent-program-card-title">{sendingPoint} - {recievingPoint}</div>
        <div className="recent-program-card-footer">
          <div className="recent-program-card-footer-left"><b>{noOfSlacks} বস্তা</b> - &nbsp; <i>{comodity}</i><br /> <b>প্রেরনঃ</b> &nbsp; {sendingDate} </div>
          <div className="recent-program-card-footer-right">{programStatus}</div>
        </div>
      </div>
    </>
  );
}
