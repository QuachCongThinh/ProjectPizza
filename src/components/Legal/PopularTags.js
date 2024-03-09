import { mockPopularPost as DataPopularPost } from "../../data/Legal/DataPopularTags";

export function PopularPost() {
  return (
    <div className="popularPost tags">
      {DataPopularPost.map((item) => (
        <>
          <h5>{item.title}</h5>
          {item.tags && (
            <>
              {item.tags.map((tag) => (
                <a href="/">{tag.name}</a>
              ))}
            </>
          )}
        </>
      ))}
    </div>
  );
}
