import NavBar from "../../components/navBar/NavBar";

import "./RunningProgramsPage.css";

import RecentProgramInfoCard from "../../components/RecentProgramInfoCard/RecentProgramInfoCard";
import FirmInfo from "../../components/firm_info/FirmInfo";
import { Row, Col } from "antd";
import programList from "./ProgramList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "../../components/back_button/BackButton";
import backendURL from "../../components/urlProvider";
import { message } from "antd";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function RunningProgramsPage() {
  // getting uid from login or signup :v
  //console.log(useLocation().state?.user);

  let { firmId } = useParams();
  const [spinning, setSpinning] = useState(true);

  const [runningPrograms, setSendingPrograms] = useState([]);

  let done = false;
  const [firmInfo, setFirmInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!done)
        try {
          done = true;
          const response = await axios.get(
            backendURL + "api/v1/firms/" + firmId,
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
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          backendURL + "api/v1/invoice/running/" + firmId,
          {
            headers: { Authorization: localStorage.getItem("token") },
            withCredentials: true,
          }
        );
        // console.log(localStorage.getItem('token'));
        //console.log(res.data);
        setSendingPrograms(res.data);
        setSpinning(false);
        //console.log(runningPrograms);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function emptyRunningProgram() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          paddingTop: "30px",
        }}
      >
        <h1>
          <i>চলমান কোনো প্রোগ্রাম নেই</i>
        </h1>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <BackButton />
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="rp-main-wrapper">
        <div className="rp-header">
          <div className="rp-header-left">
            <BackButton /> &nbsp; &nbsp; &nbsp;
            <div className="rp-header-text">চলমান প্রোগ্রাম সমূহ</div>
          </div>
          <div className="rp-header-right">
            {spinning === true ? (
              <Spin
                indicator={
                  <LoadingOutlined
                    style={{
                      fontSize: 150,
                      color: "black",
                    }}
                    spin
                  />
                }
              />
            ) : (
              <FirmInfo
                firmName={firmInfo?.name}
                firmAddress={firmInfo?.address}
                ProprietorName={firmInfo?.proprietor}
              />
            )}
          </div>
        </div>
        <div className="rp-body">
          <Row>
            {spinning === true ? (
              <Spin style={{width: "100%", display: "flex", justifyContent:"center"}}
                indicator={
                  <LoadingOutlined
                    style={{
                      fontSize: 150,
                      color: "black",
                    }}
                    spin
                  />
                }
              />
            ) : runningPrograms.length == 0 ? (
              emptyRunningProgram()
            ) : (
              runningPrograms.map((program) => {
                return (
                  <Col className="rp-col" span={12} key={program.invoiceNo}>
                    <RecentProgramInfoCard
                      {...program}
                      route={"/program/" + program.invoiceNo}
                      key={program.invoiceNo}
                    />
                  </Col>
                );
              })
            )}
          </Row>
        </div>
      </div>
    </>
  );
}
