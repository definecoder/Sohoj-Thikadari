import NavBar from "../../components/navBar/NavBar";

import "./MovementRegisterPage.css";

import RecentProgramInfoCard from "../../components/RecentProgramInfoCard/RecentProgramInfoCard";
import DarkButton from "../../components/darkButton/DarkButton";
import FirmInfo from "../../components/firm_info/FirmInfo";
import { Row, Col } from "antd";
import programList from "./ProgramList";

export default function MovementRegisterPage() {
  // getting uid from login or signup :v
  //console.log(useLocation().state?.user);

  return (
    <>
      <NavBar />
      <div className="mr-main-wrapper">
        <div className="mr-header">
          <div className="mr-header-left">
            <div className="mr-header-text">মুভমেন্ট রেজিস্টারঃ</div>
            <DarkButton
              buttonText={"ডাউনলোড"}
              routePath={"forbidden"}
              onClick={() => {}}
            />
          </div>
          <div className="mr-header-right">
            <FirmInfo
              firmName={"মেসার্স বলাকা ওভারসিস লিমিটেড"}
              firmAddress={"৪১৪/এ, ডিটি রোড কদমতলি, চট্টগ্রাম"}
              ProprietorName={"জহিরুল ইসলাম"}
            />
          </div>
        </div>
        <div className="mr-body">
          <Row>
            {programList.map((program) => {
              return (
                <Col className="mr-col" span={12} key={program.programId}>
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
