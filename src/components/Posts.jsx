import NewPost from "./NewPost";
import PostList from "./PostList";

const Posts = () => {
  return (
    <div className="posts">
    <p className="posts__my-posts">My posts</p>
    <NewPost />
    <PostList />
  </div>
  )
};

export default Posts;
