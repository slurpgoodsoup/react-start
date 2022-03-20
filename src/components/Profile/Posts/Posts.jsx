import NewPostContainer from "./NewPost/NewPostContainer";
import PostList from "./PostList/PostList";
import style from "./Posts.module.css";

const Posts = (props) => {
  return (
    <div className={style.posts}>
      <p className={style.posts__myPosts}>My posts</p>
      <NewPostContainer
        dispatch={props.dispatch}
        profilePage={props.profilePage}
      />
      <PostList profilePage={props.profilePage} />
    </div>
  );
};

export default Posts;
