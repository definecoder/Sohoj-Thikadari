import NavBar from "../../components/navBar/NavBar";

import "./MyBillsPage.css";

import FirmInfo from "../../components/firm_info/FirmInfo";
import backendURL from "../../components/urlProvider";
import { Row, Col } from "antd";

import BillCard from "../../components/bill_card/BillCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "../../components/back_button/BackButton";
import { message } from "antd";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function MyBillsPage() {
  // getting uid from login or signup :v
  //console.log(useLocation().state?.user);
  let done = false;
  let { firmId } = useParams();
  const [spinning, setSpinning] = useState(true);


  const [firmInfo, setFirmInfo] = useState(null);
  const [billList, setBillList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (!done)
        try {
          done = true;
          const response = await axios.get(
            backendURL + "api/v1/firms/" +
              firmId,
            {
              headers: { Authorization: localStorage.getItem("token") },
              withCredentials: true,
            }
          );

          setFirmInfo(response.data);

          const response2 = await axios.get(
            backendURL + "api/v1/bills/all/" +
              firmId,
            {
              headers: { Authorization: localStorage.getItem("token") },
              withCredentials: true,
            }
          );

          setBillList(response2.data);
          setSpinning(false);

          // setInvoiceCount(res.data.)
        } catch (error) {
          message.error(error.response.data.msg);
          done = false;
        }
    };
    fetchData();
  }, []);

  function emptyBillRender() {
    return (
      <div className="movement-reg-empty-title">
        <h2>আপনার কোন বিল যুক্ত করা হয়নি </h2>
        <h3>বিল তৈরি করার পর সকল বিলের তথ্য এইখানে পুনরায় পাওয়া যাবে।</h3>
        <div>ধন্যবাদ।</div>
        &nbsp;
        <BackButton />
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="bp-main-wrapper">
        <div className="bp-header">
          <div className="bp-header-left">
            <BackButton />
            <div className="bp-header-text">আমার বিল সমূহ</div>
          </div>
          <div className="bp-header-right">
            {spinning === true ? (
              <Spin style={{width: "100%", display: "flex", justifyContent:"center"}}
                indicator={
                  <LoadingOutlined
                    style={{
                      fontSize: 70,
                      color: "black",
                    }}
                    spin
                  />
                }
              />
            ) : <FirmInfo
              firmName={firmInfo?.name}
              firmAddress={firmInfo?.address}
              ProprietorName={firmInfo?.proprietor}
            />}
          </div>
        </div>
        <div className="bp-body">
          <Row>
            {spinning === true ? (
              <Spin style={{width: "100%", height:"50vh", display: "flex", alignItems:"center", justifyContent:"center"}}
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
            ) : billList.length == 0
              ? emptyBillRender()
              : billList.map((bill) => {
                  return (
                    <Col className="bp-col" span={12} key={bill.id}>
                      <BillCard firmID={firmId} {...bill} />
                    </Col>
                  );
                })}
          </Row>
        </div>
      </div>
    </>
  );
}
