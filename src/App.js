import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { getHashFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import { useDataLayerValue } from "./DataLayer"


const spotify = new SpotifyWebApi();

function App() {
  const [_token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getHashFromUrl();

    window.location.hash = "";
    const _token = hash.access_token;
    
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      setToken(_token);
      spotify.setAccessToken(_token);
      
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });
    }

  }, []);

  return (
    <div className="app">
      {/* <h1>🚀 MusixXXxxXx 🚀</h1> */}
      {/* Very nice logo */}
      {/* Login with a button */}
      { token ? <Player spotify={ spotify } /> : <Login /> }
    </div>
  );
}

export default App;
