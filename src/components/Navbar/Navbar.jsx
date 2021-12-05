import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../../img/netflix.png';
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';
import profile from '../../img/profile.png';

const Navbar = () => {
  const [isScrolled, seItScrolled] = useState(false);

  window.onScroll = () => {
       seItScrolled(window.yOffset === 0 ? false : true);
       return () => (window.onScroll = null);
  }

  console.log(isScrolled);

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                  <img src={logo} alt="logo" className="netflix-logo" />
                  <span className="">Homepage</span>
                  <span className="">Series</span>
                  <span className="">Movies</span>
                  <span className="">New and Popular</span>
                  <span className="">My List</span>
                </div>
                <div className="right">
                  <Search className="icon"/>
                  <span>KID</span>
                  <Notifications className="icon"/>
                  <img src={profile} alt="profile" />
                  <div className="profile">
                  <ArrowDropDown className="icon"/>
                  <div className="options">
                  <span>Settings</span>
                  <span>Logout</span>
                  </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;