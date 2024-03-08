import React from "react";
import { mockFormContact as FormContact } from "../../data/Contact/FormContact";

export function ContactForm() {
  return (
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
  );
}
