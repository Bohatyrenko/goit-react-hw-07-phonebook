import React from 'react';
import { Route, Link } from 'react-router-dom';
import s from '../pages/Pages.module.css';
import RegisterPage from '../pages/RegisterPage';

const LoginPage = () => (
  <div className={s.container}>
    <section id="content">
      <form action="">
        <h1>Login Form</h1>
        <div>
          <input type="text" placeholder="Username" required="" id="username" />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            required=""
            id="password"
          />
        </div>
        <div>
          <input type="submit" value="Log in" />
          <a href="https://support.google.com/accounts/answer/7682439?hl=ru">
            Lost your password?
          </a>
          <Link to="/register">Register</Link>
          <Route path="/register" component={RegisterPage} />
        </div>
      </form>
    </section>
  </div>
);

export default LoginPage;
