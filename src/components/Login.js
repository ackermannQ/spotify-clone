import React from 'react';
import './Login.css'
import { loginUrl } from '../spotify'

function Login() {
  return (
    <div className="login">
        <img
        src="https://producteurpro.fr/wp-content/uploads/2019/09/Spotify-logo.jpg"
        alt="MusixXxxX" />
        <a href={ loginUrl }>Login with 🚀 MusixXXxxXx 🚀</a>
        {/* Login with a button */}
    </div>
  )
}

export default Login;