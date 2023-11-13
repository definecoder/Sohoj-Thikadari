import NavBar from "../../components/navBar/NavBar";

import "./MyBillsPage.css";

import FirmInfo from "../../components/firm_info/FirmInfo";
import { Row, Col } from "antd";

import BillCard from "../../components/bill_card/BillCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "../../components/back_button/BackButton";

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
            "http://localhost:8888/api/v1/firms/" + firmId,
            {
              headers: { Authorization: localStorage.getItem("token") },
            }
          );

          setFirmInfo(response.data);

          const response2 = await axios.get(
            "http://localhost:8888/api/v1/bills/all/" + firmId,
            {
              headers: { Authorization: localStorage.getItem("token") },
            }
          );

          setBillList(response2.data);

          // setInvoiceCount(res.data.)
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
            {billList.map((bill) => {
              return (
                <Col className="bp-col" span={12} key={bill.id}>
                  <BillCard {...bill} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
}
