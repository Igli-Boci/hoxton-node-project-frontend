import React from "react";
import "../styles/newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="newsletter__content">
            <h6 className="subtitle">Learn more</h6>
            <h2>
              Explore all
              <span className="highlight">
                {" "}
                the offers and subscribe to learn more!
              </span>
            </h2>
          </div>

          <div className="newsletter__form">
            <input type="email" placeholder="Email" />
            <button className="secondary__btn subscribe__btn">
              Subscribe Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
