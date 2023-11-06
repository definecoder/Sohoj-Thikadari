import NavBar from "../../components/navBar/NavBar";

import "./MyBillsPage.css";

import FirmInfo from "../../components/firm_info/FirmInfo";
import { Row, Col } from "antd";
import billList from "./billList";
import BillCard from "../../components/bill_card/BillCard";

export default function MyBillsPage() {
  // getting uid from login or signup :v
  //console.log(useLocation().state?.user);

  return (
    <>
      <NavBar />
      <div className="bp-main-wrapper">
        <div className="bp-header">
          <div className="bp-header-left">
            <div className="bp-header-text">আমার বিল সমূহ</div>
          </div>
          <div className="bp-header-right">
            <FirmInfo
              firmName={"মেসার্স বলাকা ওভারসিস লিমিটেড"}
              firmAddress={"৪১৪/এ, ডিটি রোড কদমতলি, চট্টগ্রাম"}
              ProprietorName={"জহিরুল ইসলাম"}
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
