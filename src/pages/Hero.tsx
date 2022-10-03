import React from "react";
import "../styles/hero.css";

import lotus from "../images/lotus.png";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>We're Providing</h2>
              <h2>The Best Offers</h2>
              <h2 className="highlight">You Can Find!</h2>
            </div>
            <p className="description">
              You have heard of it from abroad and have asked for it. Finally,
              for the first time in Albania, we are making possible for you to
              get your preferred phone coupled with a monthly plan and pay for
              it gradually. And you can find the best choices at LOTUS Stores
              with smartphone selections carefully chosen for you.
            </p>
            <div className="hero__btns">
              <button className="primary__btn">Get Started Now</button>
              <button className="secondary__btn">Discover More</button>
            </div>
          </div>

          <div className="hero__img">
            <img src={lotus} alt="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
