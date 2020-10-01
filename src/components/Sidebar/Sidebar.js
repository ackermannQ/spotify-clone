import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOptions"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
          <img
          src={ require("./../../assets/logo.png") }
          alt="MusixXxxX" />
      </div>
      <SidebarOption title="Home" />
      <SidebarOption title="Search" />
      <SidebarOption title="Your favorites !" />
    </div>
  );
}

export default Sidebar;