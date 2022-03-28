import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <h1 className="heading">
          I <span style={{ color: 'red' }}>AM</span>
          <br />
          <span style={{ color: 'red' }}>JOSEPH</span> VIJAY
          <span style={{ fontFamily: 'cursive', color: 'green' }}>
            (Fullstack Developer)
          </span>
        </h1>
        <button className="btn">Hire Me</button>
      </div>
    </div>
  );
};

export default Home;
