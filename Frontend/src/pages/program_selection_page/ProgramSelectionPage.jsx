import "./ProgramSelectionPage.css";
import NavBar from "../../components/navBar/NavBar";
import RecentProgramInfoCard from "../../components/RecentProgramInfoCard/RecentProgramInfoCard";
import programList from "./ProgramList";
import { Link } from "react-router-dom";
export default function FirmProfilePage() {
  return (
    <>
      <NavBar />
      <div className="ps-main-wrapper">
        <div className="ps-header">প্রোগ্রাম নির্বাচন করুন</div>
        <div className="ps-grid-wrapper">
          {programList.map((program) => {
            return (
              <div className="ps-program" key={program.programId}>
                {/* invoice no pathate hobe */}
                
                <RecentProgramInfoCard
                  // className="ps-program"
                  {...program}
                  route={"/firm/"+program.programId+"/addRecievingInfo"}
                  key={program.programId}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
