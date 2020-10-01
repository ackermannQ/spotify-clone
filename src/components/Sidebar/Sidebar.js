import React, { useState } from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOptions";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from "./../../DataLayer"

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
          <img
          src={ require("./../../assets/logo.png") }
          alt="MusixXxxX" />
      </div>
      <SidebarOption title="Home" Icon={ HomeIcon }/>
      <SidebarOption title="Search" Icon={ SearchIcon }/>
      <SidebarOption title="Your favorites !" Icon={ LibraryMusicIcon }/>
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
    
      { playlists?.items?.map(playlist => (
        <SidebarOption title={ playlist.name } />
      ))}

    </div>
  );
}

export default Sidebar;