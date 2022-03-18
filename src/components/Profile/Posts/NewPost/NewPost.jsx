import style from "./NewPost.module.css";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../state'

const NewPost = (props) => {

  let newPostElement = React.createRef();
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text))
  };
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  return (
    <div className={style.newPost}>
      <textarea
        value={props.profilePage.newPostText}
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
