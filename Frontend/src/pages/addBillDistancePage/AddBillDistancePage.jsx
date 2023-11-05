import { useState, useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./AddBillDistancePage.css";
import _ from "lodash";

import { Space, Table, Input, Rate } from "antd";
import DarkButton from "../../components/darkButton/DarkButton";
import { useNavigate } from "react-router-dom";

const data = [
  {
    invoiceNo: "১২৩২১৩১২৩",
    programNo: "৭৭৮৬",
    sendingPoint: "চট্টগ্রাম বন্দর",
    receivingPoint: "সিলেট সদর",
    distance: "",
    pricePerTon: "",
  },
  {
    invoiceNo: "১২৩২১৩১২৩",
    programNo: "৭৭৮৬",
    sendingPoint: "চট্টগ্রাম বন্দর",
    receivingPoint: "সিলেট সদর",
    distance: "",
    pricePerTon: "",
  },
  {
    invoiceNo: "১২৩২১৩১২৩",
    programNo: "৭৭৮৬",
    sendingPoint: "চট্টগ্রাম বন্দর",
    receivingPoint: "সিলেট সদর",
    distance: "",
    pricePerTon: "",
  },
  {
    invoiceNo: "১২৩২১৩১২৩",
    programNo: "৭৭৮৬",
    sendingPoint: "চট্টগ্রাম বন্দর",
    receivingPoint: "সিলেট সদর",
    distance: "",
    pricePerTon: "",
  },
];

export default function AddBillDistancePage() {

    const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState(data);

  const onChangeInput = (e, index) => {
    const { name, value } = e.target;

    const editData = employeeData.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );

    setEmployeeData(editData);
  };

  return (
    <>
      <NavBar />
      <div className="addbilldistance-canvas">
        <div className="addbilldistance-title">বিলের দূরত্ব ও দর দিন</div>
        <div className="addbilldistance-container">
          <table className="addbilldistance-table">
            <thead>
              <tr>
                <th>প্রোগ্রাম নং</th>
                <th>প্রেরক কেন্দ্র</th>
                <th>প্রাপক কেন্দ্র</th>
                <th>ইনভয়েস নং</th>
                <th>দূরত্ব</th>
                <th>টনপ্রতি দর</th>
              </tr>
            </thead>
            <tbody>
              {employeeData.map(
                (
                  {
                    invoiceNo,
                    programNo,
                    sendingPoint,
                    receivingPoint,
                    distance,
                    pricePerTon,
                  },
                  index
                ) => (
                  <tr key={index}>
                    <td className="addbilldistance-fixed-table-data">
                      {programNo}
                    </td>
                    <td className="addbilldistance-fixed-table-data">
                      {sendingPoint}
                    </td>
                    <td className="addbilldistance-fixed-table-data">
                      {receivingPoint}
                    </td>
                    <td className="addbilldistance-fixed-table-data">
                      {invoiceNo}
                    </td>
                    <td>
                      <Input
                        name="distance"
                        value={distance}
                        onChange={(e) => onChangeInput(e, index)}
                        placeholder={`${programNo} প্রোগ্রামের দূরত্ব দিন`}
                      />
                    </td>
                    <td>
                      <Input
                        name="pricePerTon"
                        value={pricePerTon}
                        onChange={(e) => onChangeInput(e, index)}
                        placeholder={`টন প্রতি দর দিন`}
                      />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <div className="registerbtn">
            <DarkButton
              buttonText="সংরক্ষন করুন"
              onClick={() => {
                alert(JSON.stringify(employeeData));
                navigate("/addBillHeadings", {
                    state: employeeData,
                  });
              }}
              routePath="forbidden"
              type="submit"
            />
          </div>
        </div>
      </div>
    </>
  );
}
