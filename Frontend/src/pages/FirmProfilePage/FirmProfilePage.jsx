import NavBar from "../../components/navBar/NavBar";
import FirmInfo from "../../components/firm_info/FirmInfo";
import LightIconButton from "../../components/light_button/LightIconButton";
import LightIconButtonStyled from "../../components/light_button/LightIconButtonStyled";
import { useParams } from "react-router-dom";
import {
  PlusSquareOutlined,
  FileDoneOutlined,
  ProfileOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  ReadOutlined,
  FileTextOutlined,
  EditOutlined,
} from "@ant-design/icons";
import "./FirmProfilePage.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FirmProfilePage(props) {
  let { firmId } = useParams();

  let done = false;
  const [firmInfo, setFirmInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!done)
        try {
          done = true;
          const response = await axios.get(
            "http://localhost:8888/api/v1/firms/" + firmId,
            {
              headers: { Authorization: localStorage.getItem("token") },
            }
          );

          setFirmInfo(response.data);

          // setInvoiceCount(res.data.)
        } catch (error) {
          alert(error.response.data.msg);
          done = false;
        }
    };
    fetchData();
  }, [firmId]);

  return (
    <>
      <NavBar />
      <div className="fp-main-wrapper">
        <div className="fp-left-section-wrapper">
          <div className="fp-firm-info-wrapper">
            <FirmInfo
              firmName={firmInfo?.name}
              firmAddress={firmInfo?.address}
              ProprietorName={firmInfo?.proprietor}
            />
          </div>
          <div className="fp-left-btn-wrapper">
            <LightIconButtonStyled
              buttonText="আমার বিলসমূহ"
              onClick={() => {}}
              // <FontAwesomeIcon icon="fa-light fa-receipt" />
              IconComponent={FileTextOutlined}
              routePath={"/firm/" + firmId + "/bills"}
              type="submit"
            />
            <LightIconButtonStyled
              buttonText="ফার্মের তথ্য পরিবর্তন"
              onClick={() => {}}
              IconComponent={EditOutlined}
              routePath="forbidden"
              type="submit"
            />
          </div>
        </div>
        <div className="fp-btn-wrapper">
          <LightIconButton
            buttonText="নতুন প্রোগ্রাম যুক্ত করুন"
            onClick={() => {}}
            IconComponent={PlusSquareOutlined}
            routePath={"/firm/" + firmId + "/addNewProgram"}
            type="submit"
          />
          <LightIconButton
            buttonText="প্রাপ্তির তথ্য যুক্ত করুন"
            onClick={() => {}}
            IconComponent={FileDoneOutlined}
            routePath={"/firm/" + firmId + "/receiving-programs"}
            type="submit"
          />
          <LightIconButton
            buttonText="চলমান প্রোগ্রামসমূহ"
            onClick={() => {}}
            IconComponent={ProfileOutlined}
            routePath={"/firm/" + firmId + "/programs"}
            type="submit"
          />
          <LightIconButton
            buttonText="বিল তৈরি করুন"
            onClick={() => {}}
            IconComponent={DollarOutlined}
            routePath={"/firm/" + firmId + "/bill/invoices"}
            type="submit"
          />
          <LightIconButton
            buttonText="সরকারী বিল নম্বর যুক্ত করূন"
            onClick={() => {}}
            IconComponent={CheckCircleOutlined}
            routePath={"/firm/" + firmId + "/addgovbillnum"}
            type="submit"
          />
          <LightIconButton
            buttonText="মুভমেন্ট রেজিস্টার"
            onClick={() => {}}
            IconComponent={ReadOutlined}
            routePath={"/firm/" + firmId + "/movement-register"}
            type="submit"
          />
        </div>
      </div>
    </>
  );
}
