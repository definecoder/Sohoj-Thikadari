import "./Circle.css";
import { CheckOutlined } from "@ant-design/icons";
export default function SelectedCircle() {
  return (
    <div className="psc-circle">
      <CheckOutlined style={{ fontSize: "60px", fontWeight: "bold" }} />
    </div>
  );
}
