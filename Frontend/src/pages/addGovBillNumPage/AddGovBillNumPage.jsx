import NavBar from "../../components/navBar/NavBar";
import "./AddGovBillNumPage.css";
import AddGovBillCard from "../../components/addGovBillCard/AddGovBillCard";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AddGovBillNumPage() {
  var done = false;
  let { firmId } = useParams();

  const [pendingGovBills, setPendingGovBills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!done) {
        try {
          done = true;
          const response = await axios.get(
            "http://localhost:8888/api/v1/bills/govtBills/" + firmId,
            {
              headers: { Authorization: localStorage.getItem("token") },
            }
          );

          console.log(response.data);

          setPendingGovBills(response.data);

          // setInvoiceCount(res.data.)
        } catch (error) {
          alert(error.response.data.msg);
          done = false;
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="gov-bill-num-add-page-canvas">
        <div className="add-gov-bill-num-page-title">সরকারি বিল নম্বর দিন</div>
        <div className="main-content-gov-bill-add">
          {pendingGovBills.length !== 0 ? (
            pendingGovBills.map((bill, indx) => {
              return (
                <AddGovBillCard
                  billNo={bill.billNo}
                  amount={bill.amount}
                  billDate={bill.billDate}
                  billId={bill.id}
                  key={indx}
                />
              );
            })
          ) : (
            <>
              <h1>
                <i>সরকারি নাম্বার দেওয়ার মত বিল নেই</i>
              </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
}
