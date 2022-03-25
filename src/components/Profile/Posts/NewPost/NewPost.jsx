import style from "./NewPost.module.css";
import React from "react";
const NewPost = (props) => {
  let newPostElement = React.createRef();
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  let addPost = () => {
    props.addPost();
  };

  return (
    <div className={style.newPost}>
      <textarea
        value={props.currentText}
        onChange={onPostChange}
        ref={newPostElement}
        className={style.newPost__textarea}
        placeholder="Ну че там.."
      ></textarea>
      <button className={style.newPost__btn} onClick={addPost}>
        Send
      </button>
    </div>
  );
};

export default NewPost;
