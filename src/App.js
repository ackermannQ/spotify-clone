import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { getHashFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import { useDataLayerValue } from "./DataLayer"


const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getHashFromUrl();

    window.location.hash = "";
    const token = hash.access_token;
    
    if (token) {
      setToken(token);
      spotify.setAccessToken(token);
      
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });
    }

  }, []);
  
  console.log(user);

  return (
    <div className="app">
      {/* <h1>🚀 MusixXXxxXx 🚀</h1> */}
      {/* Very nice logo */}
      {/* Login with a button */}
      { token ? <Player /> : <Login /> }
    </div>
  );
}

export default App;
