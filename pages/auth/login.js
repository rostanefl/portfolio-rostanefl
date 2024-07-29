import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../../styles/Auth.module.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

function Login() {
  return (
    <div className={styles.authContainer}>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
          // Add your login logic here
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.authForm}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password:</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" className={styles.error} />
            </div>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
