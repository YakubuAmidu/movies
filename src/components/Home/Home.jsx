import React from 'react';
import './Home.scss';
import Navbar from '../Navbar/Navbar';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div className="home">
          <Navbar />
          <Featured />
        </div>
    )
}

export default Home;