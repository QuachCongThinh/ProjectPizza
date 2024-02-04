import "./style.scss";
import React from "react";
import { mockProductBanner as ProductBanner } from "../../data/ProductBanner";
import BannerSlider from "../../components/BannerSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
  const sliderBanner = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
  };

  return (
    <div className="banner">
      <div className="image-banner">
        <img
          src="https://androthemes.com/themes/react/slices/assets/img/veg/11.png"
          alt="Bg"
        />

      </div>
      <div className="banner-inner">
        <div className="container">
          <Slider {...sliderBanner}>
            {ProductBanner.map((item, itemKey) => (
              <div key={itemKey} className="list-product">
                <div className="leftBanner">
                  <ul className="text-product">
                    <li>
                      <h1 className="title">{item.title}</h1>
                      <h4 className="subtitle">{item.subtitle}</h4>
                      <p className="description">{item.description}</p>
                      <div className="banner-icon-wrapper">
                        {item.energy && (
                          <>
                            {item.energy?.map((energyItem, energyKey) => (
                              <li key={energyKey}>
                                <div className="banner-icon">
                                  <i className="flaticon-calories"></i>
                                  <i className="flaticon-cheese"></i>
                                  <div className="banner-icon-body">
                                    <p className="value">{energyItem.value}</p>
                                    <p className="text">{energyItem.text}</p>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </>
                        )}
                      </div>
                      <div className="banner-control">
                        <a href="/" className="btn-custom primary">
                          Order
                          <i className="flaticon-shopping-bag"></i>
                        </a>
                        <p className="price">{item.price}</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="rightBanner">
                  <img src={item.imageUrl} alt="ImgProduct" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <BannerSlider />
    </div>
  );
}
export default Banner;
