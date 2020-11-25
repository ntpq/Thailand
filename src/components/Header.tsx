import React from "react";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <div>
        <div className="logo">THAILAND</div>
      </div>
      <div>
        <ul className="header-lists">
          <li className="header-list">
            <FontAwesomeIcon
              icon={faClock}
              size="lg"
              style={{ margin: "0 20px", color: " #01b3a7" }}
            />
            <span>09:00AM - 05:00PM</span>
          </li>
          <li
            className="header-list"
            style={{ borderLeft: "1px solid #e1e1e1", marginLeft: "25px" }}
          >
            <FontAwesomeIcon
              icon={faPhoneAlt}
              size="lg"
              style={{ margin: "0 20px", color: " #01b3a7" }}
            />
            <span>+66 63-220-2100</span>
          </li>
          <li className="header-list">
            <button className="btn-quote">Get Free Quote</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
