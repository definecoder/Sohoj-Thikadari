import { useState } from "react";
import BlankCircle from "./BlankCircle";
import "./ProgramSelectionCard.css";
import SelectedCircle from "./SelectedCircle";

export default function ProgramSelectionCard({
  programNo,
  programDate,
  sendingPoint,
  receivingPoint,
  noOfSlacks,
  sendingDate,
  receivingDate,
  comodity,
  programId,
  selected,
  handleClick,
}) {
  return (
    <>
      <div onClick={handleClick} className="psc-main-wrapper">
        <div className="psc-checkbox">
          {selected ? <SelectedCircle /> : <BlankCircle />}
        </div>
        <div className="psc-info">
          <div className="psc-header">
            <div className="psc-header-left">
              প্রোগ্রাম নংঃ &nbsp;{" "}
              <span className="program-no-style">{programNo}</span>
            </div>
            <div className="psc-header-right">{programDate}</div>
          </div>
          <div className="psc-title">
            {sendingPoint} - {receivingPoint}
          </div>
          <div className="psc-footer">
            <div className="psc-footer-left">
              <b>{noOfSlacks} বস্তা</b> - &nbsp; <i>{comodity}</i>
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
