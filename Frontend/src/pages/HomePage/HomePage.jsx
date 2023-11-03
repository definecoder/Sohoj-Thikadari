import { useLocation } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import newsData from "./newsData";
import recentProgramList from './recentProgramList';

import "./HomePage.css";
import NewsCard from "./NewsCard";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import UserStatusCard from "./UserStatusCard";
import RecentProgramInfoCard from "../../components/RecentProgramInfoCard/RecentProgramInfoCard";

export default function HomePage() {
  // getting uid from login or signup :v
  //console.log(useLocation().state?.user);

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
              <div className="home-recent-program-title">সাম্প্রতিক প্রোগ্রাম সমুহ</div>
              <div className="home-recent-program-cards-container">
                {recentProgramList.map((program) => {
                    return <RecentProgramInfoCard {...program} key={program.programId}/>;
                })}                                
              </div>
            </div>
            <div className="home-user-status-canvas">
              <UserStatusCard title={'মোট প্রোগ্রাম'} number={'১২৯'}/>
              <UserStatusCard title={'মোট বিল'} number={'২৬'}/>
              <UserStatusCard title={'মোট ফার্ম'} number={'৩'}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
