import { useState } from "react";
import BlankCircle from "./BlankCircle";
import "./ProgramSelectionCard.css";
import SelectedCircle from "./SelectedCircle";

export default function ProgramSelectionCard({
  invoiceNo,
  programDate,
  sendingPoint,
  receivingPoint,
  receivingNetSlack,
  sendingDate,
  receivingDate,
  commodity,
  programId,
  selected,
  handleClick,
}) {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  sendingDate = new Date(sendingDate).toLocaleDateString("bn-BD", options);
  receivingDate = new Date(receivingDate).toLocaleDateString("bn-BD", options);
  programDate = new Date(programDate).toLocaleDateString("bn-BD", options);
  return (
    <>
      <div onClick={handleClick} className="psc-main-wrapper">
        <div className="psc-checkbox">
          {selected ? <SelectedCircle /> : <BlankCircle />}
        </div>
        <div className="psc-info">
          <div className="psc-header">
            <div className="psc-header-left">
              ইনভয়েস নংঃ &nbsp;{" "}
              <span className="program-no-style">{invoiceNo}</span>
            </div>
            <div className="psc-header-right">{programDate}</div>
          </div>
          <div className="psc-title">
            {sendingPoint} - {receivingPoint}
          </div>
          <div className="psc-footer">
            <div className="psc-footer-left">
              <b>{receivingNetSlack} বস্তা</b> - &nbsp; <i>{commodity}</i>
              <br /> <b>প্রেরনঃ</b> &nbsp; {sendingDate}{" "}
            </div>
            <div className="psc-footer-right">
              <b>প্রাপ্তিঃ </b> &nbsp; {receivingDate}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
