import React from "react";
import "../Contact/style.scss";
import BannerContact from "../../assets/imgContact.jpg";
import { ContactDetails } from "../../components/Contact/Details";
import { ContactForm } from "../../components/Contact/Form";

function ContactUs() {
  return (
    <div className="contact">
      <div className="contact-maps">
        <img src={BannerContact} alt="Img" />
      </div>
      <div className="contact-info">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
}
export default ContactUs;
