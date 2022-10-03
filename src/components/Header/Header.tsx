import React, { useRef, useEffect } from "react";
import "./header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Offers",
    path: "/all-offers",
  },
  {
    display: "Profile",
    path: "/profile",
  },
  {
    display: "LogIn",
    path: "/logIn",
  },
  {
    display: "Sign Up",
    path: "/signUp",
  },
];

const Header = () => {
  useEffect(() => {
    window.addEventListener;
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>LOTUS</h2>
          </div>

          {/* ========= navigation ========= */}
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item">
                  <a href={item.path} className="menu__link">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
