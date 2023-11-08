import "./ProgramSelectionPage.css";
import NavBar from "../../components/navBar/NavBar";
import RecentProgramInfoCard from "../../components/RecentProgramInfoCard/RecentProgramInfoCard";
import programList from "./ProgramList";
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function FirmProfilePage() {  

  let { firmId } = useParams();

  const [sendingPrograms, setSendingPrograms] = useState([...programList]);    

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8888/api/v1/invoice/sending/" + firmId,
          {
            headers: { Authorization: localStorage.getItem('token') },
          }
        );
        // console.log(localStorage.getItem('token'));
        //console.log(res.data.Invoice);
        setSendingPrograms(res.data.Invoice);    
        //console.log(sendingPrograms);
      } catch (error) {}
    };
    fetchData();    
  }, []);

  return (
    <>
      <NavBar />
      <div className="ps-main-wrapper">
        <div className="ps-header">প্রোগ্রাম নির্বাচন করুন</div>
        <div className="ps-grid-wrapper">
          {sendingPrograms.map((program) => {
            return (
              <div className="ps-program" key={program.invoiceNo}>
                {/* invoice no pathate hobe */}
                
                <RecentProgramInfoCard
                  // className="ps-program"
                  {...program}
                  route={"/firm/"+ firmId +"/addRecievingInfo/" + program.invoiceNo}
                  key={program.invoiceNo}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
