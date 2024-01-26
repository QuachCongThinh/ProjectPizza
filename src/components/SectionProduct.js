import "../pages/Product/style.scss";
import { mockProductContainer as ProductSection } from "../data/ProductSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SectionProductHeader() {
  const settingsProduct = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      {ProductSection.map((product) => (
        <>
          <div className="section-title">
            <h5 className="primary">{product.primary}</h5>
            <h2 className="title">{product.title}</h2>
            <p className="subtitle">{product.subtitle}</p>
          </div>
          <Slider {...settingsProduct}>
            {product.product.map((item) => (
              <div className="product">
                <a href="/" className="product-thumb">
                  <img src={item.imageUrl} alt="Bg" />
                </a>
                <div className="product-body">
                  <div className="product-desc">
                    <h4 className="title">{item.title}</h4>
                    <p className="description">{item.description}</p>
                    <p className="price">{item.price}</p>
                    <div className="favorite">
                      <i class="far fa-heart"></i>
                    </div>
                  </div>
                  <div className="product-control">
                    <a href="/" className="btn-order">
                      Order <i class="fas fa-shopping-cart"></i>
                    </a>
                    <a href="/" className="btn-custom">
                      Customize <i class="fas fa-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </>
      ))}
    </div>
  );
}
