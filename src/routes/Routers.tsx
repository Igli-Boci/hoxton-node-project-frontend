import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import LogIn from "../pages/LogIn";
import { useEffect, useState } from "react";

type Offer = {
  id : number,
  name : string,
  price : string,
  minutes : string,
  mb: string,
  sms : string,
  duration: string

}

type User = {
  id : number,
  name : string,
  email : string,
  number : string,
  password : string,
  balance : string,

}

const Routers = () => {
  const [currentUser , setCurrentUser] = useState(null)
  const [currentUserOffers , setCurrentUserOffers ] = useState(null)
  const [allOffers, setAllOffers] = useState(null)

  function signIn (data) {
    setCurrentUser(data.user)
    localStorage.token = data.token
  }

  function signOut () {
    setCurrentUser(null)
    localStorage.removeItem("token")
  }

  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:3001/validate' , {
        headers : {Authorization : localStorage.token}
      })
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          signIn(data)
        }
      })
    }
  }, [])

  useEffect(() => {
    if(localStorage.token) {
      fetch('http://localhost:3001/offers' , {
        headers : {Authorization : localStorage.token}
      })
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          setCurrentUserOffers(data)
        }
      })
    }
  } , [])

  useEffect(() => {
    fetch('http://localhost:3001/all-offers')
    .then(resp => resp.json())
    .then(data => setAllOffers(data))
  } ,[])

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signIn" element={<SignIn signIn={signIn} />} />
      <Route path="/logIn" element={<LogIn signIn={signIn} />} />
    </Routes>
  );
};

export default Routers;
