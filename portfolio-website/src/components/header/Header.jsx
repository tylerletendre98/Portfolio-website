import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div>
        <ul className="list">
          <Link to="/aboutMe">
            <li>About Me</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="contactMe">
            <li>Contact Me</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
