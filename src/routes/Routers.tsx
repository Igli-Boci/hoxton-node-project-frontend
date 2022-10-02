import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import Offers from "../pages/Offers";
import { ProfilePage } from "../pages/ProfilePage";

const Routers = () => {
  // const [currentUser, setCurrentUser] = useState(null);
  // const [currentUserOffers, setCurrentUserOffers] = useState(null);

  // function signIn(data) {
  //   setCurrentUser(data.user);
  //   localStorage.token = data.token;
  // }

  // function signOut() {
  //   setCurrentUser(null);
  //   localStorage.removeItem("token");

  //   useEffect(() => {
  //     if (localStorage.token) {
  //       fetch("http://localhost:3010/validate", {
  //         headers: { Authorization: localStorage.token },
  //       })
  //         .then((resp) => resp.json())
  //         .then((data) => {
  //           if (data.error) {
  //             alert(data.error);
  //           } else {
  //             signIn(data);
  //           }
  //         });
  //     }
  //   }, []);

  //   useEffect(() => {
  //     if (localStorage.token) {
  //       fetch("http://localhost:3010/offers", {
  //         headers: { Authorization: localStorage.token },
  //       })
  //         .then((resp) => resp.json())
  //         .then((data) => {
  //           if (data.error) {
  //             alert(data.error);
  //           } else {
  //             setCurrentUserOffers(data);
  //           }
  //         });
  //     }
  //   }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/all-offers" element={<Offers />} />
    </Routes>
  );
};
export default Routers;
