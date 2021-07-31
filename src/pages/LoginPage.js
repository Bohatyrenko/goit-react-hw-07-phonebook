import React from 'react';
import { Route, Link } from 'react-router-dom';
import s from '../pages/Pages.module.css';
import RegisterPage from '../pages/RegisterPage';

const LoginPage = () => (
  <div className={s.container}>
    <section id="content">
      <h1>Login Form</h1>
      <form action="">
        <label htmlFor="">
          <p>Enter login</p>
          <input name="login" type="text" placeholder="Login" />
        </label>
        <label htmlFor="">
          <p>Enter password</p>
          <input name="password" type="password" placeholder="Password" />
        </label>
        <div style={{ marginTop: '20px' }}>
          <button>Login</button>
        </div>
      </form>
    </section>
  </div>
);

export default LoginPage;
