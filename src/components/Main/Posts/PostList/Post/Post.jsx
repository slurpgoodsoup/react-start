import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.post}>
      <img
        className={style.post__photo}
        src="https://vjoy.cc/wp-content/uploads/2020/04/50059_19633152-7566413-image-a-56_1570908569851.jpg"
      />
      <p className={style.post__name}>{props.name}</p>
      <p className={style.post__text}>{props.text}</p>
    </div>
  );
};
export default Post;
