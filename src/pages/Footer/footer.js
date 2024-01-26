import React from "react";
import { FooterTop } from "../../components/FooterTop";
import { FooterMiddle } from "../../components/FooterMiddle";
import { FooterBottom } from "../../components/FooterBottom";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
      </div>
    </div>
  );
}
export default Footer;
