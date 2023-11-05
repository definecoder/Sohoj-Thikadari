import "./BillProgramSelectionPage.css";
import NavBar from "../../components/navBar/NavBar";
import ProgramSelectionCard from "../../components/ProgramSelectionCard/ProgramSelectionCard";
import programList from "./ProgramList";
import { Row, Col } from "antd";

export default function BillProgramSelectionPage() {
  return (
    <>
      <NavBar />

      <div className="bps-main-wrapper">
        <Row>
          <Col span={12}>
            <ProgramSelectionCard {...programList[0]} />
          </Col>
          <Col span={12}>
            <ProgramSelectionCard {...programList[0]} />
          </Col>
          <Col span={12}>
            <ProgramSelectionCard {...programList[0]} />
          </Col>
          <Col span={12}>
            <ProgramSelectionCard {...programList[0]} />
          </Col>
        </Row>

        {/* <ProgramSelectionCardSelected {...programList[0]} /> */}
      </div>
    </>
  );
}
