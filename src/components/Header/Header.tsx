import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import { User } from "../../pages/ProfilePage";
import e from "cors";

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
];

const Header = ({ setCurrentUser }: any) => {
  const [user, setUser] = useState<User | null>(null);

  function signOut() {
    setCurrentUser(null);
    localStorage.removeItem("token");
  }
  useEffect(() => {
    window.addEventListener;
  }, []);
  useEffect(() => {
    fetch("http://localhost:3010/user", {
      method: "GET",
      headers: { Authorization: localStorage.token },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.error) {
          alert("error");
        } else {
          setUser(resp);
          console.log(resp);
        }
      });
  }, []);
  console.log(user);
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
              ))}{" "}
              {user ? "user is logedIn" : "user is logout"}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
