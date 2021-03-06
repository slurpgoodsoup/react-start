import NewPostContainer from "./NewPost/NewPostContainer";
import PostListContainer from "./PostList/Post/PostListContainer";
import style from "./Posts.module.css";

const Posts = (props) => {
  return (
    <div className={style.posts}>
      <p className={style.posts__myPosts}>My posts</p>
      <NewPostContainer
        dispatch={props.dispatch}
        profilePage={props.profilePage}
      />
      <PostListContainer/>
    </div>
  );
};

export default Posts;
