import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import resume from '../Resume/ResumeMe.pdf';
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <a href={resume} download>
          <button className="btn">
            DOWNLOAD CV <DownloadIcon />
          </button>
        </a>

        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/contact">
            <li>Contact Me</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
