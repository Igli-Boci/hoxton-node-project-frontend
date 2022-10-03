import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import Offers from "../pages/Offers";
import { ProfilePage } from "../pages/ProfilePage";
import { useEffect, useState } from "react";
import Offer from "../pages/Offer";
import Header from "../components/Header/Header";
import {User} from "../pages/ProfilePage"
const Routers = () => {
 const [currentUser, setCurrentUser] = useState<User | null>(null);
 const [offers, setOffers] = useState([]);
 
  function signIn(data) {
    setCurrentUser(data.user);
    localStorage.token = data.token;
  }
   function signOut() {
    setCurrentUser(null);
    localStorage.removeItem("token");
  }
  
  useEffect(() => {
    if (localStorage.token) {
      fetch("http://localhost:3010/validate", {
        headers: { Authorization: localStorage.token },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            console.log(data)
            alert(data.error);
          } else {
            signIn(data);
          }
        });
    }
  }, []);

  useEffect(() => {
    fetch("http://localhost:3010/offers", {
      method: "GET",
      headers: { Authorization: localStorage.token },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setOffers(resp);
        console.log(resp);
      });
  }, []);

  return (
    <>
    <Header setCurrentUser={setCurrentUser} currentUser={currentUser}/>
    <Routes >
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<ProfilePage currentUser={currentUser} signOut={signOut} offers={offers} setOffers={setOffers}/>} />
      <Route path="/signUp" element={<SignUp signIn={signIn} />} />
      <Route path="/logIn" element={<LogIn currentUser={currentUser} signIn={signIn}/>} />
      <Route path="/all-offers" element={<Offers />} />
      <Route path="/offer/:name" element={<Offer currentUser={currentUser} offers={offers} setOffers={setOffers}/>} />
    </Routes>
    </>
  );
};
export default Routers;
