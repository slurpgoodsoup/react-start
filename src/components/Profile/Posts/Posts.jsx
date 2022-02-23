import NewPost from "./NewPost/NewPost";
import PostList from "./PostList/PostList";
import style from "./Posts.module.css"

const Posts = () => {
  return (
    <div className={style.posts}>
    <p className={style.posts__myPosts}>My posts</p>
    <NewPost />
    <PostList />
  </div>
  )
};

export default Posts;
