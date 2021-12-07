import React from 'react';
import './Home.scss';
import Navbar from '../Navbar/Navbar';
import Featured from '../Featured/Featured';
import List from '../List/List';

const Home = () => {
    return (
        <div className="home">
          <Navbar />
          <Featured type="Series"/>
          <List />
          <List />
          <List />
          <List />
        </div>
    )
}

export default Home;