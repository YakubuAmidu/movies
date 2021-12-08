import React from 'react';
import NetflixText from '../../img/Netflixtext.png';
import './Register.scss';

const Register = () => {
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                <img className="logo" src={NetflixText} alt="img" />
                <button className="loginButton">Sign In</button>
            </div>
            </div>
            
            <div className="container">
             <h1>Unlimited movies, Tv shows and more</h1>
             <h2>Watch anywhere, Cancel anytime</h2>
             <p>
                Ready to watch ? Enter your email to create or restart your membership.
             </p>
             <div className="input">
                 <input type="email" placeholder="Email address" />
                 <button className="registerButton">Get started</button>
             </div>
            </div>
        </div>
    )
}

export default Register;