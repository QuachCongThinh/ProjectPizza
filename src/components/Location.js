import React from "react";
import "../pages/Location/style.scss";
import { mockLocationData as DataLocation } from "../data/DataLocation";

function Location() {
  return (
    <>
      <div className="section">
        {DataLocation.map((item) => (
          <>
            <div className="subheader dark-overlay dark-overlay-2">
              <div className="location-title">
                <h1>{item.title}</h1>
              </div>
            </div>
            <div className="container-location">
              {item.item && (
                <>
                  {item.item?.map((itemLocation) => (
                    <div className="location-item">
                      <div className="row">
                        <div className="row-left">
                          <img src={itemLocation.imageUrl} alt="Bg" />
                        </div>
                        <div className="row-right">
                          <div className="location-desc">
                            <h3>{itemLocation.title}</h3>
                            <p>{itemLocation.branch}</p>
                          </div>
                          <div className="location-info">
                            <div className="row-info">
                              <p>{itemLocation.name}</p>
                              <p>{itemLocation.address}</p>
                              <p>{itemLocation.contact}</p>
                            </div>
                            <div className="row-contact">
                              <p>{itemLocation.textPhone}</p>
                              <a href="/">{itemLocation.phone}</a>
                              <p>{itemLocation.textEmail}</p>
                              <a href="/">{itemLocation.email}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
}
export default Location;
