import React from "react";
import "../pages/Contact/style.scss";
import BannerContact from "../assets/imgContact.jpg";
import { mockContactInfo as InfoContact } from "../data/Contact/InfoContact";
import { mockFormContact as FormContact } from "../data/Contact/FormContact";

function ContactUs() {
  return (
    <div className="contact">
      <div className="contact-maps">
        <img src={BannerContact} alt="Img" />
      </div>
      <div className="contact-info">
        <div className="contact-info-details">
          {InfoContact.map((item) => (
            <div className="contact-info-box">
              <i class="flaticon-location"></i>
              <h5>{item.title}</h5>
              <span>{item.address}</span>
              <span>{item.basis}</span>
              <span>{item.phone}</span>
              <span>{item.email}</span>

              <span>{item.Mon}</span>
              <span>{item.Thu}</span>
              <span>{item.Fri}</span>
              <span>{item.Sat}</span>
            </div>
          ))}
        </div>
        <div className="contact-info-form">
          {FormContact.map((item) => (
            <div className="container">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <form>
                <div className="row">
                  <div className="form-group form-firstName">
                    <input
                      type="text"
                      placeholder="First Name"
                      class="form-control"
                      name="fname"
                    ></input>
                  </div>
                  <div className="form-group form-lastName">
                    <input
                      type="text"
                      placeholder="Last Name"
                      class="form-control"
                      name="lname"
                    />
                  </div>
                  <div className="form-group form-email">
                    <input
                      type="email"
                      placeholder="Email Address"
                      class="form-control"
                      name="email"
                    />
                  </div>
                  <div className="form-group form-subject">
                    <input
                      type="text"
                      placeholder="Subject"
                      class="form-control"
                      name="subject"
                    />
                  </div>{" "}
                  <div className="form-group form-message">
                    <textarea
                      name="message"
                      class="form-control"
                      placeholder="Type your message"
                      rows="8"
                    ></textarea>
                  </div>
                </div>
                <button className="btn-custom">Send Message</button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
