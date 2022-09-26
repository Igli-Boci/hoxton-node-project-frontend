import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import LogIn from "../pages/LogIn";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/logIn" element={<LogIn />} />
    </Routes>
  );
};

export default Routers;
