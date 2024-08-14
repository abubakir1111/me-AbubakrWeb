import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
import logo from '../assets/img/images (1).jpg';

function Home() {
  return (
    <div className='header'>
      <div className="nav">
        <div className="header_name_card">
          <img src={logo} alt="" />
          <Link to="/" className="header_name">My PortFolio</Link>
        </div>
        <div className="navbar">
          <Link className="link" id='link1' to="/">Home</Link>
          <Link className="link" id='link2' to="/about">About</Link>
          <Link className="link" id='link3' to="/education">Education</Link>
          <Link className="link" id='link4' to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
