import { useLocation } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import newsData from "./newsData";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8888/api/v1/invoice/sending/3c2e9c32-1ade-4ae3-974b-33fea8497f0d",
          {
            headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhQGIuY29tIiwiaWF0IjoxNjk3MjA1NDg3LCJleHAiOjE2OTk3OTc0ODd9.T3pAYAydzVO22xp_HvjilE5dNMz9XV_JYfop4mhGRPY` },
          }
        );
        console.log(res.data);
        setHomepageProgramList(res.data.Invoice);
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
            {newsData.map((singleNews) => {
              return (
                <NewsCard
                  newsText={singleNews.newsText}
                  newsLink={singleNews.newsLink}
                  key={singleNews.newsId}
                />
              );
            })}
          </div>
        </div>
        <div className="home-right-canvas">
          <div className="home-profile-canvas">
            <div className="home-welcome-section">
              {" "}
              সহজ ঠিকাদারিতে স্বাগতম{" "}
              <span className="home-username">jahirul Islam</span>{" "}
            </div>
            <div className="home-profile-info-section">
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
            </div>
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
              <UserStatusCard title={"মোট প্রোগ্রাম"} number={"১২৯"} />
              <UserStatusCard title={"মোট বিল"} number={"২৬"} />
              <UserStatusCard title={"মোট ফার্ম"} number={"৩"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
