import React from 'react';
import s from './Pages.module.css';

const RegisterPage = () => {
  return (
    <div className={s.container}>
      <section id="content">
        <h1>Register Form</h1>
        <form action="">
          <label>
            <p>Enter name</p>
            <input name="name" type="text" placeholder="Name" />
          </label>
          <label>
            <p>Enter e-mail</p>
            <input name="email" type="text" placeholder="email" />
          </label>
          <label>
            <p>Enter password</p>
            <input name="password" type="password" placeholder="password" />
          </label>
          <div style={{ marginTop: '20px' }}>
            <button>Registration</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default RegisterPage;
