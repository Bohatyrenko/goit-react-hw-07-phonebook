import React from 'react'; //при закоментированом варианте нужно сюда дописать { Component }
// import { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import style from './app.module.css';

//Components
// import ContactForm from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/ContactList.container';
// import ContactFilter from '../ContactFilter/ContactFilter';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import PhonebookPage from '../../pages/PhonebookPage';

// const initilState = {
//   name: '',
//   number: '',
// };

function App() {
  // const [state, setState] = useState(initilState);

  // useEffect(() => {
  //   setState(prev => ({
  //     ...prev,
  //     contacts:
  //       JSON.parse(localStorage.getItem('contacts')) !== null
  //         ? JSON.parse(localStorage.getItem('contacts'))
  //         : [],
  //   }));
  // }, []);

  // //Метод, который в State записывает введенные name і number
  // const handleSetName = ({ target: { name, value } }) => {
  //   setState(prev => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleReset = () => {
  //   setState({
  //     name: '',
  //     number: '',
  //   });
  // };

  return (
    <div className={style.app}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/phonebook">Phonebook</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/phonebook" component={PhonebookPage} />
      {/* <h1>Phonebook</h1>
      <ContactForm
        onSetName={handleSetName}
        reset={handleReset}
        name={state.name}
        number={state.number}
      />
      <ContactFilter />
      <ContactList /> */}
    </div>
  );
}

export default App;
