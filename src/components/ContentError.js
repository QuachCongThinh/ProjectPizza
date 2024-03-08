import { mockError as Error404 } from "../data/Error404";
import React from "react";

export function Content() {
  return (
    <div className="container">
      {Error404.map((item) => (
        <>
          <div className="page-error-text">
            <h1>{item.title}</h1>
            <p>{item.sub}</p>
            <a class="btn-custom" href="/">
              Go Back Home
            </a>
          </div>
          <div className="banner-bottom-img">
            <img src={item.imageUrl_1} alt="Img1" />
            <img src={item.imageUrl_2} alt="Img2" />
            <img src={item.imageUrl_3} alt="Img3" />
          </div>
        </>
      ))}
    </div>
  );
}
