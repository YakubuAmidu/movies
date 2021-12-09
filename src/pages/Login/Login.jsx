import React from 'react';
import NetflixTex from '../../img/Netflixtext.png';
import './Login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src={NetflixTex} alt="img" />
                </div>
            </div>

            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or phone number" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Sign In</button>
                    <span>
                        New to Netflix ? <b>Sign up now.</b>
                    </span>
                    <small>
                        This page is protected by google reCAPTURE to ensure you are not a 
                        bot. <b>Learn more.</b>
                    </small>
                </form>
            </div>
        </div>
    )
}

export default Login;