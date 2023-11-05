import "./BillProgramSelectionPage.css";
import NavBar from "../../components/navBar/NavBar";
import ProgramSelectionCard from "../../components/ProgramSelectionCard/ProgramSelectionCard";
import DarkButton from "../../components/darkButton/DarkButton";
import programList from "./ProgramList";
import { Row, Col } from "antd";
import { SelectOutlined } from "@ant-design/icons";
import FirmInfo from "../../components/firm_info/FirmInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BillProgramSelectionPage() {
  const navigate = useNavigate();
  const [selectList, setSelectList] = useState(
    Array(programList.length).fill(false)
  );

  function handleClick(index) {
    const changedSelectList = selectList.slice();
    selectList[index]
      ? (changedSelectList[index] = false)
      : (changedSelectList[index] = true);
    setSelectList(changedSelectList);
  }

  function handleSubmitClick() {
    const newProgramList = [];

    for (var i = 0; i < selectList.length; i++) {
      if (selectList[i]) {
        newProgramList.push(programList[i]);
      }
    }

    console.log(newProgramList);
    alert(newProgramList);
    navigate("/home", {
      state: {
        newProgramList,
      },
    });
  }
  return (
    <>
      <NavBar />

      <div className="bps-main-wrapper">
        <div className="bps-header">
          <div className="bps-header-left">
            <SelectOutlined />
            <div className="bps-header-text">প্রোগ্রাম নির্বাচন করুন</div>
          </div>
          <div className="bps-header-right">
            <FirmInfo
              firmName={"মেসার্স বলাকা ওভারসিস লিমিটেড"}
              firmAddress={"৪১৪/এ, ডিটি রোড কদমতলি, চট্টগ্রাম"}
              ProprietorName={"জহিরুল ইসলাম"}
            />
          </div>
        </div>
        <div className="bps-body">
          <Row>
            {programList.map((program, index) => {
              return (
                <Col span={12} key={program.programId}>
                  <ProgramSelectionCard
                    {...program}
                    selected={selectList[index]}
                    handleClick={() => {
                      handleClick(index);
                    }}
                    key={program.programId}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="bps-footer">
          <DarkButton
            buttonText="দর প্রদান করুন"
            onClick={handleSubmitClick}
            routePath="forbidden"
            type="submit"
          />
        </div>
      </div>
    </>
  );
}
