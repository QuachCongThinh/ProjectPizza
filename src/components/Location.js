import React from "react";
import "../pages/Location/style.scss";
import { mockLocationData as DataLocation } from "../data/DataLocation";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Location() {
  const position = [51.505, -0.09];
  return (
    <div>
      <div className="section">
        {DataLocation.map((item) => (
          <>
            <div className="location-title">
              <h1>{item.title}</h1>
              <p>{item.url}</p>
            </div>
            <div className="container-location">
              {item.item && (
                <>
                  {item.item?.map((itemLocation) => (
                    <div className="location-item">
                      <div className="row">
                        <div className="row-left">
                          <img src={itemLocation.imageUrl} alt="Bg" />
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
                        <div className="row-right">
                          <div className="map">
                            <MapContainer center={position} zoom={13}>
                              <TileLayer
                                className="map"
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              />
                              <Marker position={position}>
                                <Popup>A sample marker with a popup.</Popup>
                              </Marker>
                            </MapContainer>
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
    </div>
  );
}
export default Location;
