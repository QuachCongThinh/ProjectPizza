import React from "react";
import { mockNewLetter as NewLetter } from "../../data/About/NewLetter";

export function SectionBg() {
  return (
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
  );
}
