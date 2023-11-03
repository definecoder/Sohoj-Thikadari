import { useLocation } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import newsData from './newsData'

import "./HomePage.css";
import NewsCard from "./NewsCard";

export default function HomePage() {
  // getting uid from login or signup :v
  //console.log(useLocation().state?.user);

  return (
    <>
      <NavBar />
      <div className="home-canvas">
        <div className="home-news-canvas">
          <div className="home-news-title">সাম্প্রতিক সংবাদসমুহ</div>
          {
            newsData.map((singleNews, newsId) => {
                return <NewsCard newsText={singleNews.newsText} newsLink={singleNews.newsLink} key={singleNews.newsId} />;
            } ) 
          }          
        </div>
        <div className="home-right-canvas">
          <div className="home-profile-canvas"></div>
          <div className="home-content-canvas">
            <div className="home-recent-program-canvas">ami</div>
            <div className="home-user-status-canvas"></div>
          </div>
        </div>
      </div>
    </>
  );
}
