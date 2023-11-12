import DarkButton from "../../components/darkButton/DarkButton";
import { useState } from "react";
import { Input, DatePicker, Space, Switch } from "antd";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "./AddBillHeadings.css";
import NavBar from "../../components/navBar/NavBar";

export default function AddBillHeadings() {
  var done = false;
  const navigate = useNavigate();
  let { firmId } = useParams();
  const billEntryList = useLocation().state?.billEntries;
  const [newFirmInfo, setNewFirmInfo] = useState({
    billNo: "",
    submittedTo: "",
    date: "",
    invoices: billEntryList,
  });

  const handleChange = (e) => {
    if (
      e.target.name === "phone" &&
      !(
        typeof Number(e.target.value) === "number" &&
        !Number.isNaN(Number(e.target.value))
      )
    )
      return;
      setNewFirmInfo({ ...newFirmInfo, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, dateString) => {
    setNewFirmInfo({ ...newFirmInfo, date: date.toISOString() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newFirmInfo.billNo) alert("ফার্মের রেজিস্ট্রেশন নম্বর দিন");
    else if (!newFirmInfo.submittedTo) alert("ফার্মের নাম দিন");
    else if (!newFirmInfo.date) alert("প্রোপ্রাইটর এর নাম দিন");    
    else {
      // setNewFirmInfo({
      //   ...newFirmInfo,
      //   invoices: billEntryList,
      // });
      //console.log(newFirmInfo);
      //alert(JSON.stringify(newFirmInfo));            

      if(!done) try {
        done = true;
        const response = await axios.post(
          "http://localhost:8888/api/v1/bills",
          {firmID: firmId, ...newFirmInfo},
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        );
        console.log(response.data);
        navigate("/firm/" + firmId + "/bill/billDownloadPage", {
          state: {newFirmInfo},
        });
      } catch (error) {
        console.log(error);
        alert(error);
        done = false;
      }      
    }
  };

  return (
    <>
      <NavBar />
      <div className="addbillheadings-canvas">
        <div className="addbillheadings-title">বিলের সার্বিক তথ্যসমূহ দিন</div>
        <form className="add-bill-heading-form" onSubmit={handleSubmit}>
          <div className="makebill-main-form">
            <div className="makebill-form-left">
              <div className="makebill-form-row">
                <Space direction="horizontal">
                  <label htmlFor="name" className="makebill-form-label">
                    বিল নম্বর &nbsp;
                  </label>
                  <Input
                    size="large"
                    placeholder="বিল এর নম্বর দিন"
                    className="makebill-form-input"
                    id="billNo"
                    name="billNo"
                    value={newFirmInfo.billNo}
                    onChange={handleChange}
                  />
                </Space>
              </div>

              <div className="makebill-form-row">
                <Space direction="horizontal">
                  <label htmlFor="name" className="makebill-form-label">
                    বিল প্রাপক &nbsp;
                  </label>
                  <Input
                    size="large"
                    placeholder="বিল প্রাপক এর নাম দিন"
                    className="makebill-form-input"
                    id="submittedTo"
                    name="submittedTo"
                    value={newFirmInfo.submittedTo}
                    onChange={handleChange}
                  />
                </Space>
              </div>

              <div className="makebill-form-row">
              <Space direction="horizontal">
                <label htmlFor="name" className="addinvoice-form-label">
                  বিলের তারিখ &nbsp;
                </label>

                <DatePicker
                  size="large"
                  className="addinvoice-datepicker"
                  name="date"
                  placeholder="বিলের তারিখ নির্বাচন করুন"
                  onChange={handleDateChange}
                />
              </Space>
              </div>

              
            </div>
          </div>

          <div className="makebill-btn">
            <DarkButton
              buttonText="সংরক্ষন করুন"
              onClick={() => {}}
              routePath="forbidden"
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
}
