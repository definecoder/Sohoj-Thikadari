import NavBar from "../../components/navBar/NavBar";

import "./RunningProgramsPage.css";

import RecentProgramInfoCard from "../../components/RecentProgramInfoCard/RecentProgramInfoCard";
import FirmInfo from "../../components/firm_info/FirmInfo";
import { Row, Col } from "antd";
import programList from "./ProgramList";

export default function RunningProgramsPage() {
  // getting uid from login or signup :v
  //console.log(useLocation().state?.user);

  return (
    <>
      <NavBar />
      <div className="rp-main-wrapper">
        <div className="rp-header">
          <div className="rp-header-left">
            <div className="rp-header-text">চলমান প্রোগ্রাম সমূহ</div>
          </div>
          <div className="rp-header-right">
            <FirmInfo
              firmName={"মেসার্স বলাকা ওভারসিস লিমিটেড"}
              firmAddress={"৪১৪/এ, ডিটি রোড কদমতলি, চট্টগ্রাম"}
              ProprietorName={"জহিরুল ইসলাম"}
            />
          </div>
        </div>
        <div className="rp-body">
          <Row>
            {programList.map((program) => {
              return (
                <Col className="rp-col" span={12} key={program.programId}>
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
