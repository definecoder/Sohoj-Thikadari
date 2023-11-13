import NavBar from "../../components/navBar/NavBar";
import { PDFDownloadLink } from "@react-pdf/renderer";

import "./MovementRegisterPage.css";

import RecentProgramInfoCard from "../../components/RecentProgramInfoCard/RecentProgramInfoCard";
// import DarkButton from "../../components/darkButton/DarkButton";
import FirmInfo from "../../components/firm_info/FirmInfo";
import { Row, Col } from "antd";
import PdfFile from "../../components/PdfGenerator/PdfFile";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "../../components/back_button/BackButton";

export default function MovementRegisterPage() {
  // getting uid from login or signup :v
  //console.log(useLocation().state?.user);
  let done = false;
  let { firmId } = useParams();

  const [firmInfo, setFirmInfo] = useState(null);
  const [invoiceList, setInvoiceList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (!done)
        try {
          done = true;
          const response = await axios.get(
            "http://localhost:8888/api/v1/firms/" + firmId,
            {
              headers: { Authorization: localStorage.getItem("token") },
            }
          );

          setFirmInfo(response.data);

          const response2 = await axios.get(
            "http://localhost:8888/api/v1/invoice/all/" + firmId,
            {
              headers: { Authorization: localStorage.getItem("token") },
            }
          );
          setInvoiceList(response2.data);
        } catch (error) {
          alert(error.response.data.msg);
          done = false;
        }
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="mr-main-wrapper">
        <div className="mr-header">        
          <div className="mr-header-left">            
            <BackButton />
            <div className="donwolad-movement-reg">
            <div className="mr-header-text">মুভমেন্ট রেজিস্টারঃ</div>
            <PDFDownloadLink
              document={<PdfFile />}
              fileName="মুভমেন্ট রেজিস্টার.pdf"
            >
              {({ loading }) => (loading ? "লোডিং..." : <div className="download-btn-mov-reg">ডাউনলোড</div>)}
            </PDFDownloadLink>
            </div>
          </div>
          <div className="mr-header-right">
            <FirmInfo
              firmName={firmInfo?.name}
              firmAddress={firmInfo?.address}
              ProprietorName={firmInfo?.proprietor}
            />
          </div>
        </div>
        <div className="mr-body">
          <Row>
            {invoiceList.map((program, index) => {
              return (
                <Col className="mr-col" span={12} key={index}>
                  <RecentProgramInfoCard {...program} key={program.programId} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
}
