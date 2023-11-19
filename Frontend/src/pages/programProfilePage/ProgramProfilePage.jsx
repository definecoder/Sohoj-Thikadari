import { useEffect, useState } from "react";
import FirmInfo from "../../components/firm_info/FirmInfo";
import NavBar from "../../components/navBar/NavBar";
import "./ProgramProfilePage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../../components/back_button/BackButton";
import { message } from "antd";

function convertDate(date) {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return new Date(date).toLocaleDateString("bn-BD", options);
}

export default function ProgramProfilePage() {
  const [invoiceData, setInvoiceData] = useState(null);

  const invoiceNo = useParams().pid;

  // console.log("invoice: " + invoiceNo);

  // sendingDate = new Date(sendingDate).toLocaleDateString("bn-BD", options);

  let done = false;
  const [firmInfo, setFirmInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!done)
        try {
          done = true;
          const response = await axios.get(
            "https://sohoj-thikadari-production.up.railway.app:8888/api/v1/firms/" +
              invoiceData.firmID,
            {
              headers: { Authorization: localStorage.getItem("token") },
              withCredentials: true,
            }
          );

          setFirmInfo(response.data);

          // setInvoiceCount(res.data.)
        } catch (error) {
          message.error(error.response.data.msg);
          done = false;
        }
    };
    fetchData();
  }, [invoiceData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sohoj-thikadari-production.up.railway.app:8888/api/v1/invoice/" +
            invoiceNo,
          {
            headers: { Authorization: localStorage.getItem("token") },
            withCredentials: true,
          }
        );

        console.log(response);

        setInvoiceData(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />

      {invoiceData ? (
        <div className="program-profile-page-canvas">
          <div className="program-profile-left-section">
            <div className="program-profile-left-section-1">
              <div className="pp-ls-1-card">
                <div className="sending-reciving-programprofile-card-header">
                  <div className="sen-rec-programprofile-header-left">
                    প্রেরণ
                  </div>
                  <div className="sen-rec-programprofile-header-right">
                    {invoiceData.sendingPoint}
                  </div>
                </div>
                <div className="sending-reciving-programprofile-card-footer">
                  <div className="sen-rec-programprofile-footer-left">
                    <b>নেটঃ &nbsp;</b> {invoiceData.sendingNetQuantity} টন{" "}
                    <i>&nbsp;({invoiceData.sendingNetSlack} বস্তা)</i> <br />{" "}
                    <b>গ্রসঃ &nbsp;</b> {invoiceData.sendingGrossQuantity} টন{" "}
                    <i>&nbsp;({invoiceData.sendingNetSlack} বস্তা)</i>
                  </div>
                  <div className="sen-rec-programprofile-footer-right">
                    <b>{convertDate(invoiceData.sendingDate)}</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="program-profile-left-section-1">
              <div className="pp-ls-1-card">
                <div className="sending-reciving-programprofile-card-header">
                  <div className="sen-rec-programprofile-header-left">
                    প্রাপ্তি
                  </div>
                  <div className="sen-rec-programprofile-header-right">
                    {invoiceData.receivingPoint}
                  </div>
                </div>
                <div className="sending-reciving-programprofile-card-footer">
                  <div className="sen-rec-programprofile-footer-left">
                    <b>নেটঃ &nbsp;</b> {invoiceData.receivingNetQuantity} টন{" "}
                    <i>&nbsp;({invoiceData.receivingNetSlack} বস্তা)</i> <br />{" "}
                    <b>গ্রসঃ &nbsp;</b> {invoiceData.receivingGrossSlack} টন{" "}
                    <i>&nbsp;({invoiceData.receivingGrossSlack} বস্তা)</i>
                  </div>
                  <div className="sen-rec-programprofile-footer-right">
                    <b>{convertDate(invoiceData.receivingDate)}</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="program-profile-left-section-3">
              <span>
                <b>পরিমানঃ</b> <i>{invoiceData.programQuantity} টন</i>
              </span>
              <span>
                <b>ঘাটতিঃ</b> <i>{invoiceData.shortage} টন</i>
              </span>
            </div>
          </div>
          <div className="program-profile-right-section">
            <div className="program-profile-right-section-1">
              <BackButton />
              <FirmInfo
                firmName={firmInfo?.name}
                firmAddress={firmInfo?.address}
                ProprietorName={firmInfo?.proprietor}
              />
            </div>
            <div className="program-profile-right-section-2">
              <div className="pp-invoice-info-card">
                <span className="pp-invoice-card-1">
                  ইনভয়েস নং : <b>{invoiceData.invoiceNo}</b>
                </span>
                <span className="pp-invoice-card-2">
                  {invoiceData.commodity}
                </span>
                <span className="pp-invoice-card-3">
                  প্রোগ্রাম নং : <b>{invoiceData.programNo}</b>
                </span>
                <span className="pp-invoice-card-4">
                  প্রোগ্রামের তারিখঃ{" "}
                  <b>{convertDate(invoiceData.programDate)}</b>
                </span>
              </div>
            </div>
            <div className="program-profile-right-section-3">
              <div className="pp-billno-card">
                <span>
                  সরকারি বিল নম্বর : <b>{invoiceData.govtBillNo}</b>
                </span>
                <span>
                  বিল নং : <b>{invoiceData.billNo}</b>
                </span>
              </div>
            </div>
            <div className="program-profile-right-section-4">
              <b>ট্রাক নংঃ&nbsp;</b> <i>{invoiceData.truckNo}</i>
            </div>
          </div>
        </div>
      ) : (
        <h1> LOADING</h1>
      )}
    </>
  );
}
