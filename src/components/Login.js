import React from 'react';
import './Login.css'
import { loginUrl } from '../spotify'

function Login() {
  return (
    <div className="login">
        <img
        src={ require("./../assets/logo.png") }
        alt="MusixXxxX" />
        <a href={ loginUrl }>Login with 🚀 MusixXXxxXx 🚀</a>
        {/* Login with a button */}
    </div>
  )
}

export default Login;