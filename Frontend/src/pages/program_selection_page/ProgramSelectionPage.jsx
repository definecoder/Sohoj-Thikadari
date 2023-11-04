import "./ProgramSelectionPage.css";
import NavBar from "../../components/navBar/NavBar";
import RecentProgramInfoCard from "../../components/RecentProgramInfoCard/RecentProgramInfoCard";
import programList from "./ProgramList";
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
                <RecentProgramInfoCard
                  // className="ps-program"
                  {...program}
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
