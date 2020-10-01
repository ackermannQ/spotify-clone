import React from 'react';
import "./SidebarOptions.css"

function SidebarOptions ({ title, Icon }) {
  return (
    <div className="sidebarOptions">
        <p>{ title }</p>
    </div>
  );
}

export default SidebarOptions;