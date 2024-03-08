import React from "react";
import { mockSectionPadding as SectionPadding } from "../../data/About/SectionPadding";
import { mockSectionRow as SectionPaddingRow } from "../../data/About/SectionPaddingRow";

export function SectionPaddingAbout() {
  return (
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
  );
}
