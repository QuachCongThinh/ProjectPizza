import { mockRecentPost as DataRecentPosts } from "../../data/Legal/DataRecentPosts";

export function RecentPost() {
  return (
    <div className="recentPost">
      <>
        {DataRecentPosts.map((item) => (
          <>
            <h5>{item.title}</h5>
            {item.posts && (
              <>
                {item.posts.map((post) => (
                  <article className="media">
                    <a href="/">
                      <img src={post.imageUrl} alt="img" />
                    </a>
                    <div className="media-body">
                      <h6>{post.sub}</h6>
                      <span>{post.date}</span>
                    </div>
                  </article>
                ))}
              </>
            )}
          </>
        ))}
      </>
    </div>
  );
}
