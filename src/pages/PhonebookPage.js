import { React, useState, useEffect } from 'react';
import ContactFilter from '../components/ContactFilter/ContactFilter';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';

const initilState = {
  name: '',
  number: '',
};

function Phonebook() {
  const [state, setState] = useState(initilState);

  useEffect(() => {
    setState(prev => ({
      ...prev,
      contacts:
        JSON.parse(localStorage.getItem('contacts')) !== null
          ? JSON.parse(localStorage.getItem('contacts'))
          : [],
    }));
  }, []);

  //Метод, который в State записывает введенные name і number
  const handleSetName = ({ target: { name, value } }) => {
    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setState({
      name: '',
      number: '',
    });
  };
  return (
    <div>
      <ContactForm
        onSetName={handleSetName}
        reset={handleReset}
        name={state.name}
        number={state.number}
      />
      <ContactFilter />
      <ContactList />
    </div>
  );
}

export default Phonebook;

// import React from 'react';
// import Phonebook from '../components/Phonebook/Phonebook';

// const PhonebookPage = () => (
//   <div>
//     <Phonebook />
//   </div>
// );

// export default PhonebookPage;
