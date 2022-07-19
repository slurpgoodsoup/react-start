import React from "react";
import {connect} from "react-redux"
import { Formik } from "formik";
import * as Yup from "yup";
import style from './Login.module.css'
import {login} from '../../redux/auth.Reducer'

const Login = (props) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('invalid email').required('Required'),
    password: Yup.string().required('Required')
  })
  console.log(props)
  return <div className={style.loginPage}>
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false
      }}
      validateOnBlur
      onSubmit={(value) => props.login(value.email, value.password, value.rememberMe)}
      validationSchema = {validationSchema}
    >
      {({values, errors, touched, handleChange, handleBlur, handleSubmit, dirty, isValid})=> (
        <div>

        <div className={style.input}>
          <label>Email </label>
          <input
          name={'email'}
          type={'email'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          />
          {touched.email && errors.email && <p className={style.error}>{errors.email}</p>}
        </div>
        <div className={style.input}>
          <label>Password </label>
          <input
          name={'password'}
          type={'password'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          />
          {touched.password && errors.password && <p className={style.error}>{errors.password}</p>}
        </div>
        <div className={style.input}>
          <input
          name={'rememberMe'}
          type={'checkbox'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.checkbox}
          />
          <label>RememberMe</label>
        </div>

        <div>
          <button
          className={style.submitBtn}
          type = {'submit'}
          disabled = {!isValid && !dirty}
          onClick={handleSubmit}
          >Submit</button>
        </div>

        </div>
      )}

  </Formik>
 </div>

}


export default connect(null, {login})(Login);
