import React from "react";
import "../Legal/style.scss";
import "../../components/Legal/LeftLegal";
import { LeftLegal } from "../../components/Legal/LeftLegal";
import { RightLegal } from "../../components/Legal/RightLegal";

function Legal() {
  return (
    <div>
      <div className="legal">
        <div className="subheader dark-overlay dark-overlay-2">
          <div className="location-title">
            <h1>Legal</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <LeftLegal />
            <RightLegal />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Legal;
