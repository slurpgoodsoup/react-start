import {connect} from 'react-redux'
import NewPost from "./NewPost";
import PostList from '../PostList/PostList';
import React from "react";
import {
  addPostActionCreator
} from "../../../../redux/profileReducer";

// const NewPostContainer = (props) => {
//   return (
//     <NewPost
//       updateNewPostText={onPostChange}
//       addPost={addPost}
//       currentText={props.profilePage.newPostText}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    currentText : state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostActionCreator(text))
    }
  }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
