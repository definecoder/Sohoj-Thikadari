import NavBar from "../../components/navBar/NavBar";
import FirmInfo from "../../components/firm_info/FirmInfo";
import LightIconButton from "../../components/light_button/LightIconButton";
import LightIconButtonStyled from "../../components/light_button/LightIconButtonStyled";
import { PlusSquareOutlined, FileDoneOutlined } from "@ant-design/icons";
import "./FirmProfilePage.css";

export default function FirmProfilePage() {
  return (
    <>
      <NavBar />
      <div className="fp-main-wrapper">
        <div className="fp-left-section-wrapper">
          <div className="fp-firm-info-wrapper">
            <FirmInfo
              firmName={"মেসার্স বলাকা ওভারসিস লিমিটেড"}
              firmAddress={"৪১৪/এ, ডিটি রোড কদমতলি, চট্টগ্রাম"}
              ProprietorName={"জহিরুল ইসলাম"}
            />
          </div>
          <div className="fp-left-btn-wrapper">
            <LightIconButtonStyled
              buttonText="নতুন প্রোগ্রাম যুক্ত করুন"
              onClick={() => {}}
              IconComponent={PlusSquareOutlined}
              routePath="forbidden"
              type="submit"
            />
            <LightIconButtonStyled
              buttonText="নতুন প্রোগ্রাম যুক্ত করুন"
              onClick={() => {}}
              IconComponent={PlusSquareOutlined}
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
            routePath="forbidden"
            type="submit"
          />
          <LightIconButton
            buttonText="নতুন প্রোগ্রাম যুক্ত করুন"
            onClick={() => {}}
            IconComponent={FileDoneOutlined}
            routePath="forbidden"
            type="submit"
          />
          <LightIconButton
            buttonText="নতুন প্রোগ্রাম যুক্ত করুন"
            onClick={() => {}}
            IconComponent={PlusSquareOutlined}
            routePath="forbidden"
            type="submit"
          />
          <LightIconButton
            buttonText="নতুন প্রোগ্রাম যুক্ত করুন"
            onClick={() => {}}
            IconComponent={PlusSquareOutlined}
            routePath="forbidden"
            type="submit"
          />
          <LightIconButton
            buttonText="নতুন প্রোগ্রাম যুক্ত করুন"
            onClick={() => {}}
            IconComponent={PlusSquareOutlined}
            routePath="forbidden"
            type="submit"
          />
          <LightIconButton
            buttonText="নতুন প্রোগ্রাম যুক্ত করুন"
            onClick={() => {}}
            IconComponent={PlusSquareOutlined}
            routePath="forbidden"
            type="submit"
          />
        </div>
      </div>
    </>
  );
}
