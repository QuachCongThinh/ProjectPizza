import React from "react";
import { FooterTop } from "../../components/Footer/FooterTop";
import { FooterMiddle } from "../../components/Footer/FooterMiddle";
import { FooterBottom } from "../../components/Footer/FooterBottom";

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
