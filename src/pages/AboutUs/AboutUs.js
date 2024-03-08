import React from "react";
import "../AboutUs/style.scss";
import { SectionAbout } from "../../components/About/Section";
import { ParallaxAbout } from "../../components/About/Parallax";
import { SectionPaddingAbout } from "../../components/About/SectionPaddingAbout";
import { SectionBg } from "../../components/About/SectionBg";

function About() {
  return (
    <div className="about">
      <div className="subheader dark-overlay dark-overlay-2">
        <div className="location-title">
          <h1>ABOUT</h1>
        </div>
      </div>
      <SectionAbout />
      <ParallaxAbout />
      <SectionPaddingAbout />
      <SectionBg />
    </div>
  );
}
export default About;
