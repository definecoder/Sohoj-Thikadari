import "./ProgramSelectionPage.css";
import NavBar from "../../components/navBar/NavBar";
import RecentProgramInfoCard from "../../components/RecentProgramInfoCard/RecentProgramInfoCard";
import programList from "./ProgramList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../../components/back_button/BackButton";
import backendURL from "../../components/urlProvider";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function FirmProfilePage() {
  let { firmId } = useParams();
  const [spinning, setSpinning] = useState(true);

  const [sendingPrograms, setSendingPrograms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          backendURL + "api/v1/invoice/sending/" + firmId,
          {
            headers: { Authorization: localStorage.getItem("token") },
            withCredentials: true,
          }
        );
        // console.log(localStorage.getItem('token'));
        //console.log(res.data.Invoice);
        setSendingPrograms(res.data.Invoice);
        setSpinning(false);
        //console.log(sendingPrograms);
      } catch (error) {}
    };
    fetchData();
  }, []);

  function empyFirmList() {
    return (
      <div className="recieving-list-empty-title">
        <h2>প্রাপ্তির তথ্য দেওয়ার মত কোন প্রোগ্রাম / ইনভয়েস নেই। </h2>
        <h3>নতুন প্রোগ্রাম প্রেরণের পরে এই পেইজে পাওয়া যাবে।</h3>
        <div>ধন্যবাদ।</div>
        &nbsp;
        <BackButton />
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="ps-main-wrapper">
        <div className="ps-header">
          <BackButton />
          প্রোগ্রাম নির্বাচন করুন
        </div>
        {spinning === true ? (
          <Spin
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
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
        ) : sendingPrograms.length == 0 ? (
          empyFirmList()
        ) : (
          () => {}
        )}
        <div className="ps-grid-wrapper">
          {sendingPrograms.map((program) => {
            return (
              <div className="ps-program" key={program.invoiceNo}>
                {/* invoice no pathate hobe */}

                <RecentProgramInfoCard
                  // className="ps-program"
                  {...program}
                  route={
                    "/firm/" + firmId + "/addRecievingInfo/" + program.invoiceNo
                  }
                  key={program.invoiceNo}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
