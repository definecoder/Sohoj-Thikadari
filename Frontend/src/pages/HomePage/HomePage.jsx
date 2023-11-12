import { useLocation } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import recentProgramList from "./recentProgramList";

import "./HomePage.css";
import NewsCard from "./NewsCard";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import UserStatusCard from "./UserStatusCard";
import RecentProgramInfoCard from "../../components/RecentProgramInfoCard/RecentProgramInfoCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  // getting uid from login or signup :v
  //console.log(useLocation().state?.user);

  //console.log(localStorage.getItem('token'));

  const [homepageProgramList, setHomepageProgramList] = useState([]);
  const [invoiceCount, setInvoiceCount] = useState(0);
  const [billCount, setBillCount] = useState(0);
  const [firmCount, setFirmCount] = useState(0);
  const [username, setUsername] = useState(null);
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8888/api/v1/users/dashboard",
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        );
        console.log(localStorage.getItem("token"));
        console.log(res);
        setHomepageProgramList(res.data.Invoice);
        setInvoiceCount(res.data.invoiceCount);
        setBillCount(res.data.billCount);
        setFirmCount(res.data.firmCount);
        setUsername(res.data.username);
        setNewsData(res.data.newsData);
        // setInvoiceCount(res.data.)
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="home-canvas">
        <div className="home-news-canvas">
          <div className="home-news-title">সাম্প্রতিক সংবাদসমুহ</div>
          <div className="news-card-container">
            {newsData ? (
              newsData.map((singleNews) => {
                return (
                  <NewsCard
                    newsText={singleNews.newsTitle}
                    newsLink={singleNews.newsLink}
                    key={singleNews.newsId}
                  />
                );
              })
            ) : (
              <h1>নতুন সংবাদ নেই</h1>
            )}
          </div>
        </div>
        <div className="home-right-canvas">
          <div className="home-profile-canvas">
            <div className="home-welcome-section">
              <marquee behavior="alternate" direction="left">
                সহজ ঠিকাদারিতে স্বাগতম{" "}
                <span className="home-username">{username}</span>
              </marquee>
            </div>
            {/* <div className="home-profile-info-section">
              <div className="home-profile-info-card">
                <div className="profile-info-card-upper-section">
                  <CallIcon /> &nbsp; ফোন নম্বর
                </div>
                <div className="profile-info-card-lower-section">
                  +8801913112522
                </div>
              </div>
              <div className="home-profile-info-card">
                <div className="profile-info-card-upper-section">
                  <EmailIcon /> &nbsp; ইমেইল
                </div>
                <div className="profile-info-card-lower-section">
                  {" "}
                  codermehraj@gmail.com
                </div>
              </div>
            </div> */}
          </div>
          <div className="home-content-canvas">
            <div className="home-recent-program-canvas">
              <div className="home-recent-program-title">
                সাম্প্রতিক প্রোগ্রাম সমুহ
              </div>
              <div className="home-recent-program-cards-container">
                {homepageProgramList.map((program) => {
                  return (
                    <RecentProgramInfoCard
                      {...program}
                      key={program.invoiceNo}
                    />
                  );
                })}
              </div>
            </div>
            <div className="home-user-status-canvas">
              <UserStatusCard title={"মোট প্রোগ্রাম"} number={invoiceCount} />
              <UserStatusCard title={"মোট বিল"} number={billCount} />
              <UserStatusCard title={"মোট ফার্ম"} number={firmCount} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
