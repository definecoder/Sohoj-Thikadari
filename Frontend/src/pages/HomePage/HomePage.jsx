import { useLocation } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import newsData from "./newsData";

import "./HomePage.css";
import NewsCard from "./NewsCard";

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

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
                  <CallIcon /> &nbsp; ফোন নম্বর</div>
                <div className="profile-info-card-lower-section">+8801913112522</div>
              </div>
              <div className="home-profile-info-card">
              <div className="profile-info-card-upper-section">
                  <EmailIcon /> &nbsp; ইমেইল</div>
                <div className="profile-info-card-lower-section"> codermehraj@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="home-content-canvas">
            <div className="home-recent-program-canvas">ami</div>
            <div className="home-user-status-canvas">
              <div className="user-status-card">মোট প্রোগ্রাম <br />
              <span>১২৯</span></div>
              <div className="user-status-card">মোট বিল <br />
              <span>২৬</span></div>
              <div className="user-status-card">মোট ফার্ম <br />
              <span>৩</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
