import React from 'react'; //при закоментированом варианте нужно сюда дописать { Component }
// import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import s from './app.module.css';

//Components
// import ContactForm from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/ContactList.container';
// import ContactFilter from '../ContactFilter/ContactFilter';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import PhonebookPage from '../../pages/PhonebookPage';
// import Navigation from '../Navigation/Navigation';
// import AuthNav from '../AuthNav/AuthNav';
import AppBar from '../Nav/AppBar';

// const initilState = {
//   name: '',
//   number: '',
// };

function App() {
  return (
    <div className={s.app}>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/phonebook" component={PhonebookPage} />
      </Switch>
    </div>
  );

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
}

export default App;
