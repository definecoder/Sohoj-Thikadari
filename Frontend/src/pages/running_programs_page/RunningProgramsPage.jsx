import NavBar from "../../components/navBar/NavBar";

import "./RunningProgramsPage.css";

import RecentProgramInfoCard from "../../components/RecentProgramInfoCard/RecentProgramInfoCard";
import FirmInfo from "../../components/firm_info/FirmInfo";
import { Row, Col } from "antd";
import programList from "./ProgramList";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import BackButton from "../../components/back_button/BackButton";

export default function RunningProgramsPage() {
  // getting uid from login or signup :v
  //console.log(useLocation().state?.user);

  let { firmId } = useParams();

  const [runningPrograms, setSendingPrograms] = useState([...programList]);

  let done = false;
  const [firmInfo, setFirmInfo] = useState(null);

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

          // setInvoiceCount(res.data.)
        } catch (error) {
          alert(error.response.data.msg);
          done = false;
        }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8888/api/v1/invoice/running/" + firmId,
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        );
        // console.log(localStorage.getItem('token'));
        //console.log(res.data);
        setSendingPrograms(res.data);
        //console.log(runningPrograms);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function emptyRunningProgram() {
    return <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", paddingTop:"30px"}}>

            
      <h1><i>চলমান কোনো প্রোগ্রাম নেই</i></h1>
      &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; 
      <BackButton />

    </div>;
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
            <FirmInfo
              firmName={firmInfo?.name}
              firmAddress={firmInfo?.address}
              ProprietorName={firmInfo?.proprietor}
            />
          </div>
        </div>
        <div className="rp-body">
          <Row>
            {runningPrograms.length == 0 ? emptyRunningProgram() : runningPrograms.map((program) => {
              return (
                <Col className="rp-col" span={12} key={program.invoiceNo}>
                  <RecentProgramInfoCard
                    {...program}
                    route={
                      "/program/" +                      
                      program.invoiceNo
                    }
                    key={program.invoiceNo}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
}
