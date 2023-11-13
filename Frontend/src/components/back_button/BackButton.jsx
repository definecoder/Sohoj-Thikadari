import { useNavigate } from "react-router-dom";
import { CaretLeftOutlined } from "@ant-design/icons";
import "./BackButton.css";

export default function BackButton() {

    const navigate = useNavigate();

    return <>
        <div className="bck-btn-comp" onClick={()=>{navigate(-1)}}>
            <CaretLeftOutlined /> &nbsp; পেছনে যান
        </div>
    </>;

}