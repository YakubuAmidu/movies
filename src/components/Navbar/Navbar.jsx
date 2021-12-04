import React from 'react';
import './Navbar.scss';
import logo from '../../img/netflix.png';
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';
import profile from '../../img/profile.png';

const Navbar = () => {
    return (
        <div className="navbar">
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
                  <Search />
                  <span>KID</span>
                  <Notifications />
                  <img src={profile} className="profile" alt="profile" />
                  <ArrowDropDown />
                </div>
            </div>
        </div>
    )
}

export default Navbar;