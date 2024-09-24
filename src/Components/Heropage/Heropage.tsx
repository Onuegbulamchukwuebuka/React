import React from "react";
import "./Heropage.css";
import { Link } from "react-router-dom";
const Heropage = () => {
  return (
    <div>
      <div className="hero-page-section-div">
        <div className="hero-page-parent-div">
          <h1>We Change Everything WordPress</h1>
          <p>This is the only WordPress theme you will ever want to use.</p>
          <div>
            <button className="read">
              <Link to="login">LOGIN</Link>
            </button>
            <button className="DOWNLOAD">
              <Link to="Dashboard">DOWNLOAD NOW</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
