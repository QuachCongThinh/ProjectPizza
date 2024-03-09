import { mockLeftLegal as DataLeftLegal } from "../../data/Legal/DataLeftLegal";

export function LeftLegal() {
  return (
    <div className="leftLegal">
      {DataLeftLegal.map((item) => (
        <>
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
          <p>{item.subtitle_1}</p>
          <p>{item.subtitle_2}</p>
        </>
      ))}
    </div>
  );
}
