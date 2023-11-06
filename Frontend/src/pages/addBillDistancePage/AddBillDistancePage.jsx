import { useState, useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./AddBillDistancePage.css";
import _ from "lodash";

import { Space, Table, Input, Rate } from "antd";
import DarkButton from "../../components/darkButton/DarkButton";
import { useNavigate, useParams } from "react-router-dom";
import { alertClasses } from "@mui/material";
import { useLocation } from "react-router-dom";

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
    programNo: "১২৩",
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
  const billMakingInvoices = useLocation().state?.newProgramList;
  let { firmId } = useParams();
  //alert(JSON.stringify());
  const [billEntries, setBillEntries] = useState(billMakingInvoices);  
  console.log(billMakingInvoices);

  const onChangeInput = (e, index) => {
    const { name, value } = e.target;

    const editData = billEntries.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );

    setBillEntries(editData);
  };

  return (
    <>
      <NavBar />
      <div className="addbilldistance-canvas">
        <div className="addbilldistance-title">বিলের দূরত্ব ও দর দিন</div>
        <div className="addbilldistance-container">
          <div className="addbilldistance-table">
            <table>
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
                {billEntries.map(
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
                          size="large"
                          name="distance"
                          value={distance}
                          onChange={(e) => onChangeInput(e, index)}
                          placeholder={`${programNo} প্রোগ্রামের দূরত্ব দিন`}
                        />
                      </td>
                      <td>
                        <Input
                          size="large"
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
          </div>
          <div className="add-bill-distance-btn">
            <DarkButton
              buttonText="সংরক্ষন করুন"
              onClick={() => {
                alert(JSON.stringify(billEntries));
                navigate("/firm/" + firmId + "/bill/addBillHeadings", {
                  state: billEntries,
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
