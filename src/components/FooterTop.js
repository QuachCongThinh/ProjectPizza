import "../pages/Footer/style.scss";
import Logo from "../assets/LogoPizza.png";
import { mockTopFooter as Top } from "../data/Footer/ValueTop";

export function FooterTop() {
  return (
    <div className="footer-top">
      {Top.map((item) => (
        <>
          <div className="footer-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="footer-button">
            <a href="/">
              <img src={item.imageGoogleUrl} alt="Logo" />
            </a>
            <a href="/">
              <img src={item.imageAppStoreUrl} alt="Logo" />
            </a>
          </div>
        </>
      ))}
    </div>
  );
}
