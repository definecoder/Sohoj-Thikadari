import { useEffect, useState } from "react";
import IconButton from "../../components/iconButton/IconButton";
import NavBar from "../../components/navBar/NavBar";
import "./MyFirmsPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function MyFirmsPage() {
  const navigate = useNavigate();

  const [firmList, setFirmList] = useState([
    {
      id: "1",
      name: "M/s Balaka Overseas Ltd",
    },
    {
      id: "2",
      name: "M/s Balaka Overseas Ltd",
    },
    {
      id: "3",
      name: "M/s Balaka Overseas Ltd",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8888/api/v1/firms",
          {
            headers: { Authorization: localStorage.getItem('token') },
          }
        );
        console.log(res.data[0].Firm);
        setFirmList(res.data[0].Firm);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();    
  }, []);

  return (
    <>
      <NavBar />
      <div className="myfirmspage-canvas">
        <div className="myfirms-left-canvas">
          <div className="myfirms-title-section">আমার ফার্মসমূহ</div>
          <div className="myfirms-firm-list-container">
            {firmList.map((firm) => {
              return <div
                className="myfirms-firmcard"
                key={firm.id}
                onClick={() => {
                  navigate("/firm/" + firm.id);
                }}
              >
                {firm.name}
              </div>;
            })}
          </div>
        </div>
        <div className="myfirms-right-canvas">
          <div className="myfirms-upper-right-empty-space"></div>
          <IconButton
            buttonText={"নতুন ফার্ম যুক্ত করুন"}
            iconName={"mail"}
            url={"/addNewFirm"}
          />
        </div>
      </div>
    </>
  );
}
