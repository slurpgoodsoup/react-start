import style from "./NewPost.module.css";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const NewPost = (props) => {
  
  let addPost = (text) => {
    props.addPost(text);
  };

  const validationSchema = Yup.object().shape({
    postText: Yup.string().max(250, 'max 250 chars').required('min 1 char')
  })
  return (
    <Formik
    initialValues={{
      postText: ''
    }}
    validateOnBlur
    onSubmit={
      (values) => {
        addPost(values.postText)
        values.postText = ''
      }}
    validationSchema = {validationSchema}
    >
      {({values, handleChange, handleBlur, isValid, handleSubmit, dirty, touched, errors}) =>(
      <div className={style.newPost}>
        <textarea
          type={'textarea'}
          name={'postText'}
          value={values.postText}
          onChange={handleChange}
          onBlur={handleBlur}
          className={style.newPost__textarea}
          placeholder="Ну че там.."
        ></textarea>
        {errors.postText && touched.postText && <p>{errors.postText}</p>}
        <button
        type = {'submit'}
        disabled = {!isValid && !dirty} 
        className={style.newPost__btn}
        onClick={handleSubmit}>
          Send
        </button>
      </div>
      )}
    </Formik>
  );
};

export default NewPost;
