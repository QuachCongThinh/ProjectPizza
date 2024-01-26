import "./style/all.scss";
import HeaderContact from "./pages/HeaderContact/headerContact";
import Navbar from "./components/Navbar";
import Banner from "./pages/Banner/banner";
import Section from "./pages/Section/section";
import BackToTop from "./components/BackToTop";
import Category from "./pages/Category/category";
import SectionProduct from "./pages/Product/product";
import ParallaxComponent from "./pages/ParallaxSlide/parallax";
import Customer from "./pages/SectionCustomer/sectionCustom";
import Footer from "./pages/Footer/footer";

function App() {
  return (
    <div className="App">
      <HeaderContact />
      <Navbar />
      <Banner />
      <Section />
      <Category />
      <SectionProduct />
      <ParallaxComponent />
      <Customer />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;