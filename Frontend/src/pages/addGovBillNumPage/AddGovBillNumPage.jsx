import NavBar from "../../components/navBar/NavBar";
import "./AddGovBillNumPage.css";
import AddGovBillCard from "../../components/addGovBillCard/AddGovBillCard";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { Spin, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import BackButton from "../../components/back_button/BackButton";
import backendURL from "../../components/urlProvider";

export default function AddGovBillNumPage() {
  var done = false;
  let { firmId } = useParams();

  const [pendingGovBills, setPendingGovBills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "সরকারি বিল যুক্ত হয়েছে",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!done) {
        try {
          done = true;
          const response = await axios.get(
            backendURL + "api/v1/bills/govtBills/" + firmId,
            {
              headers: { Authorization: localStorage.getItem("token") },
              withCredentials: true,
            }
          );

          console.log(response.data);

          setPendingGovBills(response.data);
          setIsLoading(false);
          // setInvoiceCount(res.data.)
        } catch (error) {
          message.error(error.response.data.msg);
          done = false;
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, [isLoading]);

  return (
    <>
      {contextHolder}
      <NavBar />
      <div className="gov-bill-num-add-page-canvas">
        <div className="add-gov-bill-num-page-title">
          <BackButton /> সরকারি বিল নম্বর দিন
        </div>
        <div className="main-content-gov-bill-add">
          {isLoading ? (
            <Spin
              style={{
                width: "100%",
                height: "70vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              indicator={
                <LoadingOutlined
                  style={{
                    fontSize: 150,
                    color: "black",
                  }}
                  spin
                />
              }
            />
          ) : pendingGovBills.length !== 0 ? (
            pendingGovBills.map((bill, indx) => {
              return (
                <AddGovBillCard
                  billNo={bill.billNo}
                  amount={bill.amount}
                  billDate={bill.billDate}
                  billId={bill.id}
                  onClick={setIsLoading}
                  onSuccess={success}
                  key={indx}
                />
              );
            })
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                paddingTop: "100px",
              }}
            >
              <br /> <br />
              <h1>
                <i>সরকারি নাম্বার দেওয়ার মত বিল নেই</i>
              </h1>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <BackButton />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
