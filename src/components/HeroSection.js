import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div id="hero" className="hero">
      <div className="hero-content">
        <h1 className="title">For Gauta, My Love</h1>
        <p className="subtitle">"Every moment with you feels like magic."</p>
        <img src="./images/us.jpg" alt="Us" className="hero-image" />
      </div>
      <div className="floating-hearts">
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
      </div>
    </div>
  );
};

export default HeroSection;
