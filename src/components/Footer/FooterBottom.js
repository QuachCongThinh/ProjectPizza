import "../../pages/Footer/style.scss";
import { mockFooterBottom as ValueBottom } from "../../data/Footer/ValueBottom";

export function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="footer-copyright">
          {ValueBottom.map((item, itemKey) => (
            <p key={itemKey}>
              {item.copyright}
              <a href="/">{item.theme}</a>
              {item.reserved}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
