import DarkButton from "../../components/darkButton/DarkButton";
import { useState } from "react";
import { Input, DatePicker, Space, Select } from "antd";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

import "./AddRecievingInfoPage.css";

export default function AddRecievingInfoForm() {
  const navigate = useNavigate();
  let { invoiceNo, firmId } = useParams();

  //console.log(useLocation().state);
  const [newprogramInfo, setNewprogramInfo] = useState({
    receivingDate: "",
    receivingNetSlack: "",
    receivingGrossSlack: "",
    receivingNetQuantity: "",
    receivingGrossQuantity: "",
    shortage: "",
    status: 2,
  });

  const handleChange = (e) => {
    if (
      (e.target.name === "receivingNetSlack" ||
        e.target.name === "receivingGrossSlack" ||
        e.target.name === "receivingNetQuantity" ||
        e.target.name === "receivingGrossQuantity" ||
        e.target.name === "shortage") &&
      !(
        typeof Number(e.target.value) === "number" &&
        !Number.isNaN(Number(e.target.value))
      )
    )
      return;
    setNewprogramInfo({ ...newprogramInfo, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, dateString) => {
    setNewprogramInfo({ ...newprogramInfo, receivingDate: date.toISOString() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newprogramInfo.receivingDate) message.error("প্রাপ্তির তারিখ দিন");
    else if (!newprogramInfo.receivingNetSlack)
      message.error("প্রাপ্ত নেট বস্তার সংখ্যা দিন");
    else if (!newprogramInfo.receivingGrossSlack)
      message.error("প্রাপ্ত গ্রস বস্তার সংখ্যা দিন");
    else if (!newprogramInfo.receivingNetQuantity)
      message.error("প্রাপ্ত নেট পরিমান দিন");
    else if (!newprogramInfo.receivingGrossQuantity)
      message.error("প্রাপ্ত গ্রস পরিমান দিন");
    else if (!newprogramInfo.shortage) message.error("ঘাটতির পরিমান দিন");
    else {
      //message.error(JSON.stringify(newprogramInfo));
      newprogramInfo.receivingGrossQuantity = parseFloat(
        newprogramInfo.receivingGrossQuantity
      );
      newprogramInfo.receivingGrossSlack = parseFloat(
        newprogramInfo.receivingGrossQuantity
      );
      newprogramInfo.receivingNetQuantity = parseFloat(
        newprogramInfo.receivingGrossQuantity
      );
      newprogramInfo.receivingNetSlack = parseFloat(
        newprogramInfo.receivingGrossQuantity
      );
      newprogramInfo.shortage = parseFloat(
        newprogramInfo.receivingGrossQuantity
      );

      try {
        const response = await axios.put(
          "https://sohoj-thikadari-production.up.railway.app:8888/api/v1/invoice/receiving/" +
            invoiceNo,
          newprogramInfo,
          {
            headers: { Authorization: localStorage.getItem("token") },
            withCredentials: true,
          }
        );
        console.log(response.data);
        navigate("/firm/" + firmId, {
          state: {},
        });
      } catch (error) {
        message.error(error);
        navigate("/firm/" + firmId, {
          state: {},
        });
      }
    }
  };

  return (
    <div>
      <form className="add-new-program-form" onSubmit={handleSubmit}>
        <div className="addrecievinginfo-main-form">
          <div className="addrecievinginfo-form-left">
            <div className="addrecievinginfo-form-row">
              <Space direction="horizontal">
                <label htmlFor="name" className="addrecievinginfo-form-label">
                  প্রাপ্তির তারিখ &nbsp;
                </label>

                <DatePicker
                  size="large"
                  className="addrecievinginfo-datepicker"
                  name="receivingDate"
                  placeholder="প্রাপ্তির তারিখ নির্বাচন করুন"
                  onChange={handleDateChange}
                />
              </Space>
            </div>

            <div className="addrecievinginfo-form-row">
              <Space direction="horizontal">
                <label
                  htmlFor="password"
                  className="addrecievinginfo-form-label"
                >
                  প্রাপ্ত নেট বস্তা &nbsp;
                </label>
                <Input
                  size="large"
                  placeholder="প্রাপ্ত নেট বস্তার পরিমান দিন"
                  className="addrecievinginfo-form-input"
                  id="receivingNetSlack"
                  name="receivingNetSlack"
                  value={newprogramInfo.receivingNetSlack}
                  onChange={handleChange}
                  addonAfter="বস্তা"
                />
              </Space>
            </div>

            <div className="addrecievinginfo-form-row">
              <Space direction="horizontal">
                <label
                  htmlFor="password"
                  className="addrecievinginfo-form-label"
                >
                  প্রাপ্ত গ্রস বস্তা &nbsp;
                </label>
                <Input
                  size="large"
                  placeholder="প্রাপ্ত গ্রস বস্তার পরিমান দিন"
                  className="addrecievinginfo-form-input"
                  id="receivingGrossSlack"
                  name="receivingGrossSlack"
                  value={newprogramInfo.receivingGrossSlack}
                  onChange={handleChange}
                  addonAfter="বস্তা"
                />
              </Space>
            </div>
          </div>

          <div className="addrecievinginfo-form-right">
            <div className="addrecievinginfo-form-row">
              <Space direction="horizontal">
                <label
                  htmlFor="password"
                  className="addrecievinginfo-form-label"
                >
                  প্রাপ্ত নেট পরিমান &nbsp;
                </label>
                <Input
                  size="large"
                  placeholder="প্রাপ্ত নেট পরিমান দিন"
                  className="addrecievinginfo-form-input"
                  id="receivingNetQuantity"
                  name="receivingNetQuantity"
                  value={newprogramInfo.receivingNetQuantity}
                  onChange={handleChange}
                  addonAfter="টন"
                />
              </Space>
            </div>
            <div className="addrecievinginfo-form-row">
              <Space direction="horizontal">
                <label
                  htmlFor="password"
                  className="addrecievinginfo-form-label"
                >
                  প্রাপ্ত গ্রস পরিমান &nbsp;
                </label>
                <Input
                  size="large"
                  placeholder="প্রাপ্ত গ্রস পরিমান দিন"
                  className="addrecievinginfo-form-input"
                  id="receivingGrossQuantity"
                  name="receivingGrossQuantity"
                  value={newprogramInfo.receivingGrossQuantity}
                  onChange={handleChange}
                  addonAfter="টন"
                />
              </Space>
            </div>

            <div className="addrecievinginfo-form-row">
              <Space direction="horizontal">
                <label
                  htmlFor="password"
                  className="addrecievinginfo-form-label"
                >
                  ঘাটতি &nbsp;
                </label>
                <Input
                  size="large"
                  placeholder="ঘাটতির পরিমান দিন"
                  className="addrecievinginfo-form-input"
                  id="shortage"
                  name="shortage"
                  value={newprogramInfo.shortage}
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
