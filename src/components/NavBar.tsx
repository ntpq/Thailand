import React, { useState } from "react";
import "../styles/nav.css";
function NavBar() {
  const navItems = [
    {
      title: "Home",
      url: "",
    },
    {
      title: "About",
      url: "",
    },
    {
      title: "Activities",
      url: "",
    },
    {
      title: "Traditional",
      url: "",
    },
  ];
  const [display, setDisplay] = useState(false);

  return (
    <nav>
      <ul className={display ? "nav-links nav-active" : "nav-links"}>
        {navItems.map((item, index) => {
          return (
            <li
              className="nav-item"
              style={
                display
                  ? {
                      animation: `navLinkFade 0.5s ease forwards ${
                        index / 7 + 0.3
                      }s`,
                    }
                  : {}
              }
            >
              <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </ul>
      <div className="burger" onClick={() => setDisplay(!display)}>
        <div
          className="line1"
          style={
            display ? { transform: "rotate(-45deg) translate(-5px,6px)" } : {}
          }
        ></div>
        <div className="line2 " style={display ? { opacity: 0 } : {}}></div>
        <div
          className="line3"
          style={
            display ? { transform: "rotate(45deg) translate(-5px,-6px)" } : {}
          }
        ></div>
      </div>
    </nav>
  );
}

export default NavBar;
