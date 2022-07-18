import React from "react";
import { Formik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import style from './Login.module.css'

const Login = () => {
  return <div>
    <LoginForm />
  </div>
}

const LoginForm = () => {

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('invalid email').required('Required'),
    password: Yup.string().required('Required')
  })

  return <div className={style.loginPage}>
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false
      }}
      validateOnBlur
      onSubmit={(value) => console.log(value)}
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


export default Login;
