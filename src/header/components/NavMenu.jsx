import React, { useState } from "react";
import {
  HomeOutlined,
  UnorderedListOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Menu, TimePicker } from "antd";

const items = [
  {
    label: "HOME",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "CATEGORIES",
    key: "SubMenu",
    icon: <UnorderedListOutlined />,
    children: [
      {
        type: "group",
        label: "Movies",
        children: [
          {
            label: "Now-Playing",
            key: "setting:1",
          },
          {
            label: "Top-Rated",
            key: "setting:2",
          },
        ],
      },
    ],
  },
  {
    key: "favorites",
    icon: <StarOutlined />,
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        FAVOURITES
      </a>
    ),
  },
];

function NavMenu() {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className="navbar-container">
      <div className="timestamp">{TimePicker}</div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        className="custom-menu"
      />
    </div>
  );
}

export default NavMenu;
