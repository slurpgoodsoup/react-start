import NewPost from "./NewPost";
import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../redux/profileReducer";

const NewPostContainer = (props) => {
  let onPostChange = (text) => {
    props.dispatch(updateNewPostTextActionCreator(text));
  };
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  return (
    <NewPost
      updateNewPostText={onPostChange}
      addPost={addPost}
      currentText={props.profilePage.newPostText}
    />
  );
};

export default NewPostContainer;
