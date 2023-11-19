import { useState } from "react";
import "./AddGovBillCard.css";

import { Button, Input, DatePicker, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AddGovBillCard({
  billNo,
  amount,
  billDate,
  billId,
  onClick,
  onSuccess,
}) {
  let { firmId } = useParams();
  const navigate = useNavigate();

  const [cardData, setCardData] = useState({
    billId: billId,
    govtBillNo: "",
    govtBillDate: "",
  });

  var submitCard = async () => {
    if (!cardData.govtBillNo)
      message.error(billNo + " এর সরকারি বিল নম্বর দিন");
    else if (!cardData.govtBillDate)
      message.error(billNo + " এর সরকারি বিলের তারিখ দিন");
    else {
      try {
        onClick(true);
        const response = await axios.put(
          "https://sohoj-thikadari-production.up.railway.app:8888/api/v1/bills/govtBills/" +
            firmId,
          cardData,
          {
            headers: { Authorization: localStorage.getItem("token") },
            withCredentials: true,
          }
        );
        onSuccess();
      } catch (error) {
        message.error(JSON.stringify(error.response.data.msg));
      }
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
                value={cardData.govtBillNo}
                onChange={(e) =>
                  setCardData({ ...cardData, govtBillNo: e.target.value })
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
                    govtBillDate: date.toISOString(),
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
