import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AppstoreOutlined,
  CaretDownOutlined,
  DownCircleOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

export default function FirmsDropDown() {
  const navigate = useNavigate();
  const [items, setitems] = useState([]);
  const [firmList, setFirmList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://sohoj-thikadari-production.up.railway.app/api/v1/firms",
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        );

        const tmp = res.data[0].Firm.map((item) => ({
          key: item.id,
          label: item.name,
        }));

        setitems(tmp);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const onClick = ({ key }) => {
    //message.info(`Click on item ${key}`);
    navigate("/firm/" + key);
  };

  return (
    <div className="navElement">
      <Dropdown
        menu={{
          items,
          onClick,
        }}
      >
        <a
          onClick={(e) => {
            e.preventDefault();
            navigate("/firms");
          }}
        >
          <Space>
            <div style={{ fontSize: "1.6rem" }}>ফার্মসমূহ</div>
            <DownCircleOutlined style={{ fontSize: "1.9rem" }} />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}
