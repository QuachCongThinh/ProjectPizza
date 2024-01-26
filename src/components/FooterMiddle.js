import "../pages/Footer/style.scss";
import { mockInformationFooter as Information } from "../data/Footer/Information";
import { mockTopItem as TopItems } from "../data/Footer/TopItems";
import { mockOthers as Other } from "../data/Footer/Other";
import { mockSocial as Social } from "../data/Footer/Social";

export function FooterMiddle() {
  return (
    <div className="footer-middle">
      <div className="footer-row">
        {Information.map((InforItem, InforKey) => (
          <>
            <div className="row-item">
              <h5 className="title">{InforItem.title}</h5>
              <ul key={InforKey}>
                {InforItem.menu?.map((menuItem, menuKey) => (
                  <li key={menuKey}>
                    <a href={menuItem.path}>{menuItem.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ))}
        {TopItems.map((TopItem, TopItemKey) => (
          <>
            <div className="row-item">
              <h5 className="title">{TopItem.title}</h5>
              <ul key={TopItemKey}>
                {TopItem.menu?.map((menuItem, menuKey) => (
                  <li key={menuKey}>
                    <a href={menuItem.path}>{menuItem.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ))}
        {Other.map((OtherItem, OtherKey) => (
          <>
            <div className="row-item">
              <h5 className="title">{OtherItem.title}</h5>
              <ul key={OtherKey}>
                {OtherItem.menu?.map((menuItem, menuKey) => (
                  <li key={menuKey}>
                    <a href={menuItem.path}>{menuItem.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ))}
        {Social.map((SocialItem) => (
          <>
            <div className="row-item">
              <h5 className="title">{SocialItem.title}</h5>
              <ul className="social-media">
                <li>
                  <a href="/" className="facebook">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="pinterest">
                    <i class="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="google">
                    <i class="fab fa-google"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="twitter">
                    <i class="fab fa-twitter"></i>
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
          </>
        ))}
      </div>
    </div>
  );
}
