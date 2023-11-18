import NavBar from "../../components/navBar/NavBar";

import "./MyBillsPage.css";

import FirmInfo from "../../components/firm_info/FirmInfo";
import { Row, Col } from "antd";

import BillCard from "../../components/bill_card/BillCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "../../components/back_button/BackButton";
import { message } from "antd";

export default function MyBillsPage() {
  // getting uid from login or signup :v
  //console.log(useLocation().state?.user);
  let done = false;
  let { firmId } = useParams();

  const [firmInfo, setFirmInfo] = useState(null);
  const [billList, setBillList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (!done)
        try {
          done = true;
          const response = await axios.get(
            "https://sohoj-thikadari-production.up.railway.app/api/v1/firms/" +
              firmId,
            {
              headers: { Authorization: localStorage.getItem("token") },
              withCredentials: true,
            }
          );

          setFirmInfo(response.data);

          const response2 = await axios.get(
            "https://sohoj-thikadari-production.up.railway.app/api/v1/bills/all/" +
              firmId,
            {
              headers: { Authorization: localStorage.getItem("token") },
              withCredentials: true,
            }
          );

          setBillList(response2.data);

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
            <FirmInfo
              firmName={firmInfo?.name}
              firmAddress={firmInfo?.address}
              ProprietorName={firmInfo?.proprietor}
            />
          </div>
        </div>
        <div className="bp-body">
          <Row>
            {billList.length == 0
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
