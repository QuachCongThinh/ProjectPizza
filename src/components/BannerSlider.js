import React from "react";
import "../pages/Banner/style.scss";
import { mockBannerSlider as ListProduct } from "../data/ListProduct";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BannerSlider() {
  const sliderItem = {
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
  };
  return (
    <div className="banner-slider-nav">
      <div className="container">
        <Slider {...sliderItem}>
          {ListProduct.map((list, listKey) => (
            <div key={listKey}>
              <div className="banner-nav-item">
                <div className="banner-nav-item-inner">
                  <img src={list.imageUrl} alt="Product" />
                  <div className="banner-nav-item-body">
                    <h5 className="name">{list.name}</h5>
                    <p className="price-item">{list.price}</p>
                    <p className="discount">{list.discount}</p>
                    <div className="sale">
                      <div className="sale-inner">{list.sale}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default BannerSlider;
