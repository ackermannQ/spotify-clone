import React, { Component } from 'react';
import './Player.css';
import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className= "player__body">
          <Sidebar />
          {/* SideBar */}
          <Body />
          {/* Body */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Player;