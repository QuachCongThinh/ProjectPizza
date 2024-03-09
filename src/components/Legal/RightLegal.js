import { PopularPost } from "./PopularTags";
import { RecentPost } from "./RecentPosts";
import { SearchPost } from "./SearchPosts";

export function RightLegal() {
  return (
    <div className="rightLegal">
      <div className="sidebar">
        <SearchPost />
        <RecentPost />
        <PopularPost />
      </div>
    </div>
  );
}
