import React from 'react';
import s from './Pages.module.css';

const RegisterPage = () => {
  return (
    <div className={s.container}>
      <section id="content">
        <form action="">
          <h1>Register Form</h1>
          <div>
            <input
              type="text"
              placeholder="Username"
              required=""
              id="username"
            />
          </div>
          <div>
            <input type="text" placeholder="e-mail" required="" id="e-mail" />
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
            <input type="submit" value="Register" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default RegisterPage;
