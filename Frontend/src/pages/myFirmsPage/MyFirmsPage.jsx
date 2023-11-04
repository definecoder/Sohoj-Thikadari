import IconButton from "../../components/iconButton/IconButton";
import NavBar from "../../components/navBar/NavBar";
import "./MyFirmsPage.css";

export default function MyFirmsPage() {
  return (
    <>
      <NavBar />
      <div className="myfirmspage-canvas">
        <div className="myfirms-left-canvas">
          <div className="myfirms-title-section">আমার ফার্মসমূহ</div>
          <div className="myfirms-firm-list-container">
            <div className="myfirms-firmcard">M/s Balaka Overseas Ltd</div>
            <div className="myfirms-firmcard">M/s Balaka Overseas Ltd</div>
            <div className="myfirms-firmcard">M/s Balaka Overseas Ltd</div>
            <div className="myfirms-firmcard">M/s Balaka Overseas Ltd</div>
          </div>
        </div>
        <div className="myfirms-right-canvas">
            <div className="myfirms-upper-right-empty-space"></div>
            <IconButton buttonText = {"নতুন ফার্ম যুক্ত করুন"} iconName = {"mail"} url = {"/addNewFirm"} />
        </div>
      </div>
    </>
  );
}
