import "./BillProgramSelectionPage.css";
import NavBar from "../../components/navBar/NavBar";
import ProgramSelectionCard from "../../components/ProgramSelectionCard/ProgramSelectionCard";
import DarkButton from "../../components/darkButton/DarkButton";
import { Row, Col } from "antd";
import { SelectOutlined } from "@ant-design/icons";
import FirmInfo from "../../components/firm_info/FirmInfo";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../../components/back_button/BackButton";

export default function BillProgramSelectionPage() {
  let { firmId } = useParams();
  const navigate = useNavigate();
  const [selectList, setSelectList] = useState(
    Array(0).fill(false)
  );
  const [billProgramList, setBillProgramList] = useState(
    []
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
        billProgramList[i].id = billProgramList[i].invoiceNo;
        newProgramList.push(billProgramList[i]);
      } 
    }

    //console.log(selectList);
    //alert(JSON.stringify(newProgramList));
    navigate("/firm/" + firmId + "/bill/addBillDistance", {
      state: {
        newProgramList,
      },
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8888/api/v1/invoice/forbill/" + firmId,
          {
            headers: { Authorization: localStorage.getItem('token') },
          }
        );
        // console.log(localStorage.getItem('token'));
        //console.log(res.data.Invoice);
        setBillProgramList(res.data.Invoice);    
        setSelectList(Array(billProgramList.length).fill(false));
        //console.log(selectList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();    
  }, []);

  function renderEmptyBill() {
    return <div className="no-bill-container">
            
      <h1>বিল তৈরি করার মত প্রোগ্রাম নেই</h1>
      <br />
      <BackButton />

    </div>
  }

  return (
    <>
      <NavBar />


      {billProgramList.length == 0 ? renderEmptyBill() : <div className="bps-main-wrapper">
        <div className="bps-header">
          <div className="bps-header-left">
          <BackButton />                      
            <div className="bps-header-text"><SelectOutlined />&nbsp;&nbsp;&nbsp;প্রোগ্রাম নির্বাচন করুন</div>
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
            {billProgramList.map((program, index) => {
              return (
                <Col span={12} key={program.invoiceNo}>
                  <ProgramSelectionCard
                    {...program}
                    selected={selectList[index]}
                    handleClick={() => {
                      handleClick(index);
                    }}
                    key={program.invoiceNo}
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
      </div>}
    </>
  );
}
