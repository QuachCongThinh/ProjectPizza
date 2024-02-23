import React from "react";
import "../AboutUs/style.scss";
import { mockSection as SectionIntro } from "../../data/HomePage/SectionIntro";
import { mockParallaxAbout as ParallaxSlideAbout } from "../../data/About/ParallaxSlideAbout";
import { mockSectionPadding as SectionPadding } from "../../data/About/SectionPadding";
import { mockSectionRow as SectionPaddingRow } from "../../data/About/SectionPaddingRow";
import { mockNewLetter as NewLetter } from "../../data/About/NewLetter";

function About() {
  return (
    <div className="about">
      <div className="subheader dark-overlay dark-overlay-2">
        <div className="location-title">
          <h1>ABOUT</h1>
        </div>
      </div>
      <div className="section">
        <div className="container">
          {SectionIntro.map((section, sectionKey) => (
            <div className="section-container" key={sectionKey}>
              <div className="leftSection">
                <img src={section.imageUrl} alt="section" />
                <div className="dots"></div>
              </div>
              <div className="rightSection">
                <div className="section-title">
                  <h5 className="primary">{section.primary}</h5>
                  <h2 className="title">{section.title}</h2>
                  <p className="subtitle">{section.subtitle1}</p>
                  <p className="subtitle">{section.subtitle2}</p>
                  <div>
                    <img src={section.signature} alt="Signature" />
                  </div>
                  <a href="/" className="btn-custom">
                    Check our Menu
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
      <div className="section-padding">
        <div className="container">
          <div className="row">
            {SectionPadding.map((item) => (
              <>
                <div className="left-section">
                  <div className="section-title">
                    <h5>{item.primary}</h5>
                    <h2>{item.title}</h2>
                    <p>{item.subtitle1}</p>
                    <p>{item.subtitle2}</p>
                  </div>
                  <button className="btn-custom">View All</button>
                </div>
                <div className="right-section">
                  <div className="row">
                    {SectionPaddingRow.map((item) => (
                      <>
                        <div className="team-item">
                          <div className="team-thumb">
                            <img src={item.imageUrl} alt="team" />
                          </div>
                          <div className="team-desc">
                            <h5>{item.name}</h5>
                            <span>{item.position}</span>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="section-bg dark-overlay">
        <div className="container">
          <div className="newsletter">
            <div className="section-title-newsletter">
              {NewLetter.map((item) => (
                <>
                  <h5>{item.title}</h5>
                  <p>{item.subtitle}</p>
                </>
              ))}
            </div>
            <form method="post">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
              ></input>
              <button type="submit" className="btn-custom">
                Submit
                <i class="far fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
