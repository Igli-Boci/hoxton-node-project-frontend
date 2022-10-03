import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Offers = () => {
  const params = useParams();
  const [offer, setOffer] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3010/offer/${params.name}`)
      .then((resp) => resp.json())
      .then((resp) => setOffer(resp));
  }, [offer]);

  return (
    <section id="offers">
      <div className="container">
        <div className="offers__top-content">
          <h6 className="subtitle">{offer.name}</h6>
          <h2>Get what your deserve from</h2>
          <h2 className="highlight">our best services</h2>
        </div>

        <div className="offers__item-wrapper">
          <div className="offers__item"></div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
