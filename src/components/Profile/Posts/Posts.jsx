import NewPost from "./NewPost/NewPost";
import PostList from "./PostList/PostList";
import style from "./Posts.module.css"

const Posts = (props) => {
  return (
    <div className={style.posts}>
    <p className={style.posts__myPosts}>My posts</p>
    <NewPost dispatch = {props.dispatch} profilePage = {props.profilePage}/>
    <PostList profilePage = {props.profilePage}/>
  </div>
  )
};

export default Posts;
