import DarkButton from "../../components/darkButton/DarkButton";
import { useState } from "react";
import { Input, InputNumber, Space, message } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

import "./AddNewFirmPage.css";

export default function AddNewFirmForm() {
  const navigate = useNavigate();
  const [newFirmInfo, setNewFirmInfo] = useState({
    regNo: "",
    name: "",
    proprietor: "",
    phone: "",
    email: "",
    tradeLicense: "",
    address: "",
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

  const handleSubmit = async (e) => {
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    e.preventDefault();
    if (!newFirmInfo.regNo) message.error("ফার্মের রেজিস্ট্রেশন নম্বর দিন");
    else if (!newFirmInfo.name) message.error("ফার্মের নাম দিন");
    else if (!newFirmInfo.proprietor) message.error("প্রোপ্রাইটর এর নাম দিন");
    else if (!newFirmInfo.tradeLicense) message.error("ট্রেড লাইসেন্স দিন");
    else if (!newFirmInfo.phone) message.error("ফোন নম্বর দিন");
    else if (newFirmInfo.phone.length != 10) message.error("ফোন নম্বর সঠিক নয়");
    else if (!newFirmInfo.email) message.error("ইমেইল দিন");
    else if (!emailRegex.test(newFirmInfo.email)) message.error("ইমেইল সঠিক নয়");
    else if (!newFirmInfo.address) message.error("ঠিকানা");
    else {
      
      const firmInfoFinal = {...newFirmInfo, phone: "+880" + newFirmInfo.phone}
      //message.error(JSON.stringify(firmInfoFinal));
      try {
        const response = await axios.post(
          "http://localhost:8888/api/v1/firms",
          newFirmInfo,
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        );
        console.log(response.data);
        message.success("আপনার ফার্ম যুক্ত হয়েছে")
      } catch (error) {
        console.log(error);
        message.error(error);
      }
      navigate("/firms", {
        state: {
          uid: 1,
        },
      });
    }
  };

  return (
    <div>
      <form className="add-new-firm-form" onSubmit={handleSubmit}>
        <div className="addfirm-main-form">
          <div className="addfirm-form-left">
            <div className="addfirm-form-row">
              <Space direction="horizontal">
                <label htmlFor="name" className="addfirm-form-label">
                  ফার্মের রেজিস্ট্রেশন নম্বর &nbsp;
                </label>
                <Input
                  size="large"
                  placeholder="আপনার ফার্মের রেজিস্ট্রেশন নম্বর দিন"
                  className="addfirm-form-input"
                  id="regNo"
                  name="regNo"
                  value={newFirmInfo.regNo}
                  onChange={handleChange}
                />
              </Space>
            </div>

            <div className="addfirm-form-row">
              <Space direction="horizontal">
                <label htmlFor="name" className="addfirm-form-label">
                  ফার্মের নাম &nbsp;
                </label>
                <Input
                  size="large"
                  placeholder="আপনার ফার্মের নাম দিন"
                  className="addfirm-form-input"
                  id="name"
                  name="name"
                  value={newFirmInfo.name}
                  onChange={handleChange}
                />
              </Space>
            </div>

            <div className="addfirm-form-row">
              <Space direction="horizontal">
                <label htmlFor="password" className="addfirm-form-label">
                  প্রোপাইটর &nbsp;
                </label>
                <Input
                  size="large"
                  placeholder="প্রোপাইটর এর নাম দিন"
                  className="addfirm-form-input"
                  id="proprietor"
                  name="proprietor"
                  value={newFirmInfo.proprietor}
                  onChange={handleChange}
                />
              </Space>
            </div>

            <div className="addfirm-form-row">
              <Space direction="horizontal">
                <label htmlFor="password" className="addfirm-form-label">
                  ট্রেড লাইসেন্স &nbsp;
                </label>
                <Input
                  size="large"
                  placeholder="ট্রেড লাইসেন্স নম্বর দিন"
                  className="addfirm-form-input"
                  id="tradeLicense"
                  name="tradeLicense"
                  value={newFirmInfo.tradeLicense}
                  onChange={handleChange}
                />
              </Space>
            </div>
          </div>

          <div className="addfirm-form-right">
            <div className="addfirm-form-row">
              <Space direction="horizontal">
                <label htmlFor="name" className="addfirm-form-label">
                  ফোন নম্বর 
                </label>
                <Input
                  size="large"
                  placeholder="ফোন নম্বর দিন"
                  className="addfirm-form-input"
                  id="phone"
                  name="phone"
                  value={newFirmInfo.phone}
                  onChange={handleChange}
                  addonBefore="+880"
                />
              </Space>
            </div>

            <div className="addfirm-form-row">
              <Space direction="horizontal">
                <label htmlFor="password" className="addfirm-form-label">
                  ইমেইল &nbsp;
                </label>
                <Input
                  size="large"
                  placeholder="আপনার ইমেইল দিন"
                  className="addfirm-form-input"
                  id="email"
                  name="email"
                  value={newFirmInfo.email}
                  onChange={handleChange}
                />
              </Space>
            </div>
            <div className="addfirm-form-row">
              <Space direction="horizontal">
                <label htmlFor="password" className="addfirm-form-label">
                  ঠিকানা &nbsp;
                </label>
                <Input
                  size="large"
                  placeholder="আপনার ঠিকানা দিন"
                  className="addfirm-form-input"
                  id="address"
                  name="address"
                  value={newFirmInfo.address}
                  onChange={handleChange}
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
