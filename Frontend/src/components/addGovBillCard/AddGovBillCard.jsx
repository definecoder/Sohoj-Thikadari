import "./AddGovBillCard.css";

export default function AddGovBillCard({billNo,amount,sendingPoint, recievingPoint, noOfSlacks, sendingDate, programStatus, comodity, programId}) {    
  return (
    <>
      <div className="recent-program-card" onClick={() => {alert(programId)}}>    
        <div className="recent-program-card-header">
        <div className="recent-program-card-header-left">বিল নং</div>
        <div className="recent-program-card-header-right">{amount}</div>
        </div>
        <div className="recent-program-card-title">{billNo}</div>
        <div className="recent-program-card-footer">
          <div className="recent-program-card-footer-left"><b>{billDate} বস্তা</b> - &nbsp; <i>{comodity}</i><br /> <b>প্রেরনঃ</b> &nbsp; {sendingDate} </div>
          <div className="recent-program-card-footer-right">{programStatus}</div>
        </div>
      </div>
    </>
  );
}
