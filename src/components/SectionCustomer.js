import "../style/all.scss";
import "../pages/SectionCustomer/style.scss";
import { mockListTestimonials as Testimonials } from "../data/HomePage/Testimonials";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SectionCustomers() {
  const settingsCustomer = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      {Testimonials.map((item, itemKey) => (
        <div key={itemKey}>
          <div className="section-title text-center">
            <h5 className="primary">{item.primary}</h5>
            <h2 className="title">{item.title}</h2>
            <p className="subtitle">{item.subtitle}</p>
          </div>
          <Slider {...settingsCustomer}>
            {item.customer.map((item, itemKey) => (
              <div className="customer" key={itemKey}>
                <div className="customer-item">
                  <div className="customer-thumb">
                    <img src={item.imageUrl} alt="imgCustomer" />
                  </div>
                  <div className="customer-content">
                    <i className="flaticon-left-quote"></i>
                    <p className="subtitle">{item.subtitle}</p>
                    <h5 className="name">{item.name}</h5>
                    <span>{item.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
}
