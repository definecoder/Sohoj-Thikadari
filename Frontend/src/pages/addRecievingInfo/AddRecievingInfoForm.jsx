import DarkButton from "../../components/darkButton/DarkButton";
import { useState } from "react";
import { Input, DatePicker, Space, Select } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./AddRecievingInfoPage.css";

export default function AddRecievingInfoForm() {
  const navigate = useNavigate();

  //console.log(useLocation().state);
  const [newprogramInfo, setNewprogramInfo] = useState({
    receivingDate: "",
    receivingNetSlack: "",
    receivingGrossSlack: "",
    receivingNetQuantity: "",
    receivingGrossQuantity: "",
    shortage: "",
  });

  const handleChange = (e) => {
    if (
      e.target.name === "programQuantity" &&
      !(
        typeof Number(e.target.value) === "number" &&
        !Number.isNaN(Number(e.target.value))
      )
    )
      return;
    setNewprogramInfo({ ...newprogramInfo, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, dateString) => {
    setNewprogramInfo({ ...newprogramInfo, receivingDate: dateString });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newprogramInfo.receivingDate) alert("প্রাপ্তির তারিখ দিন");
    else if (!newprogramInfo.receivingNetSlack) alert("প্রাপ্ত নেট বস্তার সংখ্যা দিন");
    else if (!newprogramInfo.receivingGrossSlack) alert("প্রাপ্ত গ্রস বস্তার সংখ্যা দিন");
    else if (!newprogramInfo.receivingNetQuantity) alert("প্রাপ্ত নেট পরিমান দিন");
    else if (!newprogramInfo.receivingGrossQuantity) alert("প্রাপ্ত গ্রস পরিমান দিন");
    else if (!newprogramInfo.shortage) alert("ঘাটতির পরিমান দিন");
    else {
      alert(JSON.stringify(newprogramInfo));
      navigate("/firm/1", {
        state: "নাইস",
      });
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
                <label htmlFor="password" className="addrecievinginfo-form-label">
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
                <label htmlFor="password" className="addrecievinginfo-form-label">
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
                <label htmlFor="password" className="addrecievinginfo-form-label">
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
                <label htmlFor="password" className="addrecievinginfo-form-label">
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
                <label htmlFor="password" className="addrecievinginfo-form-label">
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