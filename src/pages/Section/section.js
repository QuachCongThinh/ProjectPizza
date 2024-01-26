import "../Section/style.scss";
import { mockSection as SectionIntro } from "../../data/SectionIntro";

function Section() {
  return (
    <div className="section">
      <div className="container">
        {SectionIntro.map((section, sectionKey) => (
          <div className="section-container" key={sectionKey}>
            <div className="leftSection">
              <img src={section.imageUrl} alt="section" />
              <div className="dots"></div>
            </div>
            <div className="rightSection">
              <div className="section-title">
                <h5 className="primary">{section.primary}</h5>
                <h2 className="title">{section.title}</h2>
                <p className="subtitle">{section.subtitle1}</p>
                <p className="subtitle">{section.subtitle2}</p>
                <div>
                  <img src={section.signature} alt="Signature" />
                </div>
                <a href="/" className="btn-custom">
                  Check our Menu
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Section;
