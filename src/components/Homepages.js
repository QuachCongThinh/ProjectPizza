import Banner from "../pages/Banner/banner";
import Section from "../pages/Section/section";
import Category from "../pages/Category/category";
import SectionProduct from "../pages/Product/product";
import ParallaxComponent from "../pages/ParallaxSlide/parallax";
import Customer from "../pages/SectionCustomer/sectionCustom";

function HomePage() {
  return (
    <div>
      <main>
        <Banner />
        <Section />
        <Category />
        <SectionProduct />
        <ParallaxComponent />
        <Customer />
      </main>
    </div>
  );
}
export default HomePage;
