import "../../pages/Footer/style.scss";
import { mockInformationFooter as Information } from "../../data/Footer/Information";
import { mockTopItem as TopItems } from "../../data/Footer/TopItems";
import { mockOthers as Other } from "../../data/Footer/Other";
import { mockSocial as Social } from "../../data/Footer/Social";

export function FooterMiddle() {
  return (
    <div className="footer-middle">
      <div className="footer-row">
        {Information.map((InforItem, InforKey) => (
          <div key={InforKey}>
            <div className="row-item">
              <h5 className="title">{InforItem.title}</h5>
              <ul>
                {InforItem.menu?.map((menuItem, menuKey) => (
                  <li key={menuKey}>
                    <a href={menuItem.path}>{menuItem.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        {TopItems.map((TopItem, TopItemKey) => (
          <div key={TopItemKey}>
            <div className="row-item">
              <h5 className="title">{TopItem.title}</h5>
              <ul>
                {TopItem.menu?.map((menuItem, menuKey) => (
                  <li key={menuKey}>
                    <a href={menuItem.path}>{menuItem.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        {Other.map((OtherItem, OtherKey) => (
          <div key={OtherKey}>
            <div className="row-item">
              <h5 className="title">{OtherItem.title}</h5>
              <ul>
                {OtherItem.menu?.map((menuItem, menuKey) => (
                  <li key={menuKey}>
                    <a href={menuItem.path}>{menuItem.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        {Social.map((SocialItem, SocialItemKey) => (
          <div key={SocialItemKey}>
            <div className="row-item">
              <h5 className="title">{SocialItem.title}</h5>
              <ul className="social-media">
                <li>
                  <a href="/" className="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="pinterest">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="google">
                    <i className="fab fa-google"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
              <div className="footer-offer">
                <p className="description">{SocialItem.description}</p>
                <a href="/" className="btn-custom">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
