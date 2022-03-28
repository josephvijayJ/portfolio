import React from 'react';
import './About.css';
import image from '../images/Jose.jpg';
const About = () => {
  return (
    <>
      <div className="about">
        <h1 className="headings">ABOUT ME</h1>
        <div className="pic">
          <img src={image} alt="my pic" />
          <div className="intro">
            <h2>Joseph Vijay</h2>
            <p>
              I am Joseph Vijay.Im was very much interested in Developing. I
              would like to work as web developer I was graduated and passed out
              in the year 2020. I completed my Bachelor of computer applications
              in Sri Krishna Arts and Science College. And I was cleared it
              through first class. And I also had much interest in sports as
              well. Im a good cricket and badminton player.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
