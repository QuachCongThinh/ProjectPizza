import React from "react";
import { mockContactInfo as InfoContact } from "../../data/Contact/InfoContact";

export function ContactDetails() {
  return (
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
  );
}
