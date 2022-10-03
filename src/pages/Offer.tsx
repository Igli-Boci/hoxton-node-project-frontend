import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {User, Offerta} from "./ProfilePage"
import "../styles/offer.css";

type props ={
  currentUser : User | null 
}
const Offer = ({currentUser}: props) => {
  const params = useParams();
  const [offer, setOffer] = useState<Offerta | null >(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3010/offer/${params.name}`)
      .then((resp) => resp.json())
      .then((resp) => setOffer(resp));
  }, [offer]);



  function buyOffer () {
    const newoffer = structuredClone(offer)
    
    currentUser?.offers.push(offer)

  }

  return (
    <section id="offers">
      <div className="container">
        <div className="offers__top-content">
          <h1 className="subtitle">{offer?.name}</h1>
        </div>

        <div className="offers__item-wrapper">
          <div className="offers__item">
            <span className="offers__icon">
              <i className={offer?.icon}></i>
            </span>
            <h3 className="offers__title">{offer?.name}</h3>
            <p className="description">{offer?.mb}</p>
            <p className="description">{offer?.minuts} Min</p>
            <p className="description">{offer?.sms} Sms</p>
            <p className="description price">{offer?.price} €</p>
          </div>
          <button className="offer__button" onClick={() => {
             buyOffer()
             navigate("/profile")
          }}>Add to your plan</button>
        </div>
      </div>
    </section>
  );
};

export default Offer;
