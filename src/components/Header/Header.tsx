import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import { User } from "../../pages/ProfilePage";

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
    setUser(null);
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
              ))}
              {user ? (
                <>
                  <li className="menu__item">
                    <a href="/logIn" className="menu__link">
                      {"Log Out"}
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li
                    className="menu__item"
                    onClick={() => {
                      signOut();
                    }}
                  >
                    <a href="logIn" className="menu__link">
                      {"Log In"}
                    </a>
                  </li>
                  <li className="menu__item">
                    <a href="/signUp" className="menu__link">
                      {"Sign Up"}
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
