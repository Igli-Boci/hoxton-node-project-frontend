import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
<<<<<<< HEAD
import Offers from "../pages/Offers";

const Routers = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserOffers, setCurrentUserOffers] = useState(null);

  function signIn(data) {
    setCurrentUser(data.user);
    localStorage.token = data.token;
  }

  function signOut() {
    setCurrentUser(null);
    localStorage.removeItem("token");
=======
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
>>>>>>> 1488c6d75cb86328d52e20a65f61175ab9d0e7bc
  }

  useEffect(() => {
    if (localStorage.token) {
<<<<<<< HEAD
      fetch("http://localhost:3010/validate", {
        headers: { Authorization: localStorage.token },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            signIn(data);
          }
        });
    }
  }, []);

  useEffect(() => {
    if (localStorage.token) {
      fetch("http://localhost:3010/offers", {
        headers: { Authorization: localStorage.token },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            setCurrentUserOffers(data);
          }
        });
    }
  }, []);
=======
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
>>>>>>> 1488c6d75cb86328d52e20a65f61175ab9d0e7bc

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
<<<<<<< HEAD
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/all-offers" element={<Offers />} />
=======
      <Route path="/signIn" element={<SignIn signIn={signIn} />} />
      <Route path="/logIn" element={<LogIn signIn={signIn} />} />
>>>>>>> 1488c6d75cb86328d52e20a65f61175ab9d0e7bc
    </Routes>
  );
};

export default Routers;
