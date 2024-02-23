import React from "react";
import "./style.scss";
import { mockParallax as ParallaxSlide } from "../../data/HomePage/ParallaxSlide";

function ParallaxComponent() {
  return (
    <div className="container">
      <div className="section dark-overlay dark-overlay-2 bg-center bg-parallax bg-cover">
        {ParallaxSlide.map((item, itemKey) => (
          <div key={itemKey}>
            <div className="section-title">
              <h5 className="primary">{item.primary}</h5>
              <h2 className="title">{item.title}</h2>
              <p className="subtitle">{item.subtitle}</p>
            </div>
            <a href="/" className="btn-custom">
              Order Online
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ParallaxComponent;
