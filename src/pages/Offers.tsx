import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../styles/offers.css";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3010/all-offers")
      .then((resp) => resp.json())
      .then((resp) => setOffers(resp));
  }, [offers]);

  return (
    <>
      <section id="offers">
        <div className="container">
          <div className="offers__top-content">
            <h6 className="subtitle">Our Offers</h6>
            <h2>Get what you deserve from</h2>
            <h2 className="highlight">our best services</h2>
          </div>

          <div className="offers__item-wrapper">
            {offers.map((offer, index) => (
              <div
                className="offers__item"
                key={index}
                onClick={() => {
                  navigate(`/offer/${offer.name}`);
                }}
              >
                <span className="offers__icon">
                  <i className={offer.icon}></i>
                </span>
                <h3 className="offers__title">{offer.name}</h3>
                <p className="description">{offer.mb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Offers;
