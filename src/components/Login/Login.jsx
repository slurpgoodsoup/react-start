import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Field } from "react-final-form";

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

  return <Formik
  initialValues = {{
      email: '',
      password: '',
      rememberMe: false
    }}
    validateOnBlur
    onSubmit={(value) => {console.log(value)}}
    validationSchema = {validationSchema}
    >

      {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
        <div>

          <div>
            <label htmlFor="email">Email</label>
            <input
            type={'email'}
            name={'email'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            />
              {touched.email && errors.email && <p>{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
            type={'password'}
            name={'password'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            />
              {touched.password && errors.password && <p>{errors.password}</p>}
          </div>

          <div>
            <input
            type={'checkbox'}
            name={'rememberMe'}
            value={values.rememberMe}
            onChange={handleChange}/>
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          <div>
            <button
            type = {'submit'}
            disabled = {!isValid && !dirty}
            onClick = {handleSubmit}
            >Submit</button>
          </div>
        </div>
      )}

  </Formik>
}


export default Login;
