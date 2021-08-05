import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
import s from './Pages.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clearInput = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    clearInput();
  };

  return (
    <div className={s.container}>
      <section id="content">
        <h1>Register Form</h1>
        <form action="" onSubmit={handleSubmit}>
          <label>
            <p>Enter name</p>
            <input
              name="name"
              type="text"
              placeholder="Name"
              onInput={onChange}
            />
          </label>
          <label>
            <p>Enter e-mail</p>
            <input
              name="email"
              type="text"
              placeholder="email"
              onInput={onChange}
            />
          </label>
          <label>
            <p>Enter password</p>
            <input
              name="password"
              type="password"
              placeholder="password"
              onInput={onChange}
            />
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
