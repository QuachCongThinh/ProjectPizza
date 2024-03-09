import { mockRightLegal as DataRightLegal } from "../../data/Legal/DataRightLegal";

export function SearchPost() {
  return (
    <>
      {DataRightLegal.map((item) => (
        <div className="searchPost">
          <h5>{item.title}</h5>
          <form method="post">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              name="sidebar-search"
            ></input>
          </form>
        </div>
      ))}
    </>
  );
}
