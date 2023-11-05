import { useState } from "react";
import "./AddGovBillCard.css";

import { Button, Input, DatePicker } from "antd";
import { useNavigate } from "react-router-dom";

export default function AddGovBillCard({ billNo, amount, billDate }) {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState({
    govBillNo: "",
    billDate: "",
  });

  var submitCard = () => {
    if (!cardData.govBillNo)
      alert(billNo + " এর সরকারি বিল নম্বর দিন");
    else if (!cardData.billDate)
      alert(billNo + " এর সরকারি বিলের তারিখ দিন");
    else {
      alert(JSON.stringify(cardData));                  
      navigate("/firm/1/addgovbillnum", {
        state: "নাইস",
      });
    }
  };

  return (
    <>
      <div className="gov-bill-input-card">
        <div className="gov-bill-input-card-header">
          <div className="gov-bill-input-card-header-left">বিল নং</div>
          <div className="gov-bill-input-card-header-right">
            ৳ &nbsp; {amount}
          </div>
        </div>
        <div className="gov-bill-input-card-title">{billNo}</div>
        <div className="gov-bill-input-card-subtitle">{billDate}</div>
        <div className="gov-bill-input-card-footer">
          <div className="gov-bill-input-card-footer-left">
            <div className="gov-bill-input-canvas">
              <span>সরকারি বিল নম্বর</span>{" "}
              <Input
                className="gov-bill-input-textfield"
                size="large"
                placeholder="সরকারী বিল নম্বর দিন"
                value={cardData.govBillNo}
                onChange={(e) =>
                  setCardData({ ...cardData, govBillNo: e.target.value })
                }
              />
            </div>
            <div className="gov-bill-input-canvas">
              <span>বিল প্রাপ্তির তারিখ</span>{" "}
              <DatePicker
                className="gov-bill-input-textfield"
                size="large"
                placeholder="বিল প্রাপ্তির তারিখ নির্বাচন করুন"
                onChange={(date, dateString) => {
                  setCardData({
                    ...cardData,
                    billDate: dateString,
                  });
                }}
              />
            </div>
          </div>
          <div className="gov-bill-input-card-footer-right">
            <Button
              className="savebtn-addgovbill"
              size="large"
              type="primary"
              onClick={submitCard}
            >
              সংরক্ষন করুন
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
