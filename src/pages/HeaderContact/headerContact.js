import "./style.scss";
import { mockHeaderDetails as DetailHeader } from "../../data/DetailHeader";

function HeaderContact() {
  return (
    <div className="headerContact">
      <div className="container">
        {DetailHeader.map((item, itemKey) => (
          <div key={itemKey}>
            <div className="top-container">
              <div className="left">
                <p>{item.number}</p>
              </div>
              <div className="right">
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HeaderContact;
