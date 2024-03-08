import React from "react";
import { mockParallaxAbout as ParallaxSlideAbout } from "../../data/About/ParallaxSlideAbout";

export function ParallaxAbout() {
  return (
    <div className="parallax">
      <div className="section dark-overlay dark-overlay-2 bg-center bg-parallax bg-cover">
        {ParallaxSlideAbout.map((item, itemKey) => (
          <div key={itemKey}>
            <div className="section-title">
              <h2 className="title">{item.title}</h2>
              <p className="subtitle">{item.subtitle}</p>
            </div>
            <div className="row">
              {item.icon && (
                <>
                  {item.icon.map((item) => (
                    <>
                      <div className="item">
                        <i class={item.icon}></i>
                        <h4>{item.quantity}</h4>
                        <p>{item.text}</p>
                      </div>
                    </>
                  ))}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
