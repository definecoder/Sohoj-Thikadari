import DarkButton from "../../components/darkButton/DarkButton";
import backendURL from "../../components/urlProvider";
import { useState } from "react";
import { Input, DatePicker, Space, message } from "antd";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "./AddNewIvoicePage.css";

export default function AddNewInvoiceFrom() {
  const navigate = useNavigate();
  let { firmId } = useParams();

  //console.log(useLocation().state);
  const prevData = useLocation().state;
  //console.log(prevData);

  const [newprogramInfo, setNewprogramInfo] = useState({
    ...prevData,
    invoiceNo: "",
    truckNo: "",
    sendingDate: "",
    sendingNetSlack: "",
    sendingNetQuantity: "",
    sendingGrossQuantity: "",
    status: 1,
  });

  const handleChange = (e) => {
    if (
      (e.target.name === "invoiceNo" ||
        e.target.name === "sendingNetSlack" ||
        e.target.name === "sendingNetQuantity" ||
        e.target.name === "sendingGrossQuantity") &&
      !(
        typeof Number(e.target.value) === "number" &&
        !Number.isNaN(Number(e.target.value))
      )
    )
      return;
    setNewprogramInfo({ ...newprogramInfo, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, dateString) => {
    setNewprogramInfo({ ...newprogramInfo, sendingDate: date.toISOString() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newprogramInfo.invoiceNo) message.error("ইনভয়েস নম্বর দিন");
    else if (!newprogramInfo.sendingDate) message.error("প্রেরণের তারিখ দিন");
    else if (!newprogramInfo.truckNo) message.error("ট্রাকের নম্বর দিন");
    else if (!newprogramInfo.sendingNetSlack)
      message.error("প্রেরিত নেট বস্তাসংখ্যা দিন");
    else if (!newprogramInfo.sendingNetQuantity)
      message.error("প্রেরিত নেট পরিমান দিন");
    else if (!newprogramInfo.sendingGrossQuantity)
      message.error("প্রেরিত গ্রস পরিমান দিন");
    else {
      newprogramInfo.programQuantity = parseFloat(
        newprogramInfo.programQuantity
      );
      newprogramInfo.invoiceNo = parseFloat(newprogramInfo.invoiceNo);
      newprogramInfo.sendingNetSlack = parseFloat(
        newprogramInfo.sendingNetSlack
      );
      newprogramInfo.sendingNetQuantity = parseFloat(
        newprogramInfo.sendingNetQuantity
      );
      newprogramInfo.sendingGrossQuantity = parseFloat(
        newprogramInfo.sendingGrossQuantity
      );

      //message.error(JSON.stringify(newprogramInfo));
      console.log(newprogramInfo);
      try {
        const response = await axios.post(
          backendURL + "api/v1/invoice/sending",
          newprogramInfo,
          {
            headers: { Authorization: localStorage.getItem("token") },
            withCredentials: true,
          }
        );
        //console.log(response.data);
        message.success("আপনার ইনভয়েস যুক্ত হয়েছে")
        navigate("/firm/" + firmId, {
          state: {},
        });
      } catch (error) {
        //console.log(error);
        //console.log(newprogramInfo);
        message.error(error.response.data.msg);
        // navigate("/firm/" + firmId, {
        //   state: {},
        // });
      }
    }
  };

  return (
    <div>
      <form className="add-new-program-form" onSubmit={handleSubmit}>
        <div className="addinvoice-main-form">
          <div className="addinvoice-form-left">
            <div className="addinvoice-form-row">
              <Space direction="horizontal">
                <label htmlFor="name" className="addinvoice-form-label">
                  ইনভয়েস নং &nbsp;
                </label>
                <Input
                  size="large"
                  placeholder="প্রোগ্রামের নম্বর দিন"
                  className="addinvoice-form-input"
                  id="invoiceNo"
                  name="invoiceNo"
                  value={newprogramInfo.invoiceNo}
                  onChange={handleChange}
                />
              </Space>
            </div>

            <div className="addinvoice-form-row">
              <Space direction="horizontal">
                <label htmlFor="name" className="addinvoice-form-label">
                  প্রেরণের তারিখ &nbsp;
                </label>

                <DatePicker
                  size="large"
                  className="addinvoice-datepicker"
                  name="sendingDate"
                  placeholder="প্রেরণের তারিখ নির্বাচন করুন"
                  onChange={handleDateChange}
                />
              </Space>
            </div>

            <div className="addinvoice-form-row">
              <Space direction="horizontal">
                <label htmlFor="password" className="addinvoice-form-label">
                  ট্রাক নং &nbsp;
                </label>
                <Input
                  size="large"
                  placeholder="প্রেরক কেন্দ্রের নাম দিন"
                  className="addinvoice-form-input"
                  id="truckNo"
                  name="truckNo"
                  value={newprogramInfo.truckNo}
                  onChange={handleChange}
                />
              </Space>
            </div>
          </div>

          <div className="addinvoice-form-right">
            <div className="addinvoice-form-row">
              <Space direction="horizontal">
                <label htmlFor="password" className="addinvoice-form-label">
                  প্রেরিত নেট বস্তা &nbsp;
                </label>
                <Input
                  size="large"
                  placeholder="প্রেরিত নেট বস্তার পরিমান দিন"
                  className="addinvoice-form-input"
                  id="sendingNetSlack"
                  name="sendingNetSlack"
                  value={newprogramInfo.sendingNetSlack}
                  onChange={handleChange}
                  addonAfter="বস্তা"
                />
              </Space>
            </div>

            <div className="addinvoice-form-row">
              <Space direction="horizontal">
                <label htmlFor="password" className="addinvoice-form-label">
                  প্রেরিত নেট পরিমান &nbsp;
                </label>
                <Input
                  size="large"
                  placeholder="প্রেরিত নেট পরিমান দিন"
                  className="addinvoice-form-input"
                  id="sendingNetQuantity"
                  name="sendingNetQuantity"
                  value={newprogramInfo.sendingNetQuantity}
                  onChange={handleChange}
                  addonAfter="টন"
                />
              </Space>
            </div>
            <div className="addinvoice-form-row">
              <Space direction="horizontal">
                <label htmlFor="password" className="addinvoice-form-label">
                  প্রেরিত গ্রস পরিমান &nbsp;
                </label>
                <Input
                  size="large"
                  placeholder="প্রেরিত নেট পরিমান দিন"
                  className="addinvoice-form-input"
                  id="sendingGrossQuantity"
                  name="sendingGrossQuantity"
                  value={newprogramInfo.sendingGrossQuantity}
                  onChange={handleChange}
                  addonAfter="টন"
                />
              </Space>
            </div>
          </div>
        </div>

        <div className="registerbtn">
          <DarkButton
            buttonText="সংরক্ষন করুন"
            onClick={() => {}}
            routePath="forbidden"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
