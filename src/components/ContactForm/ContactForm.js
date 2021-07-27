import React from 'react'; //при закоментированом варианте нужно сюда дописать { Component }
import s from '../ContactForm/contactForm.module.css';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phoneBook/phonebook-operations';
import phonebookSelectors from '../../redux/phoneBook/phonebook-selectors';

const ContactForm = ({
  onSetName,
  // onAddContact,
  name,
  number,
  addContact,
  reset,
  phonebookContacts,
}) => {
  const noRepeetContact = contact => {
    if (
      phonebookContacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${contact.name} is alredy in contacts!`);
      return;
    }
    if (phonebookContacts.some(item => item.number === contact.number)) {
      alert(`${contact.number} is alredy in contacts!`);
      return;
    }

    addContact(contact);
    reset();
  };

  const handleAddContact = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };

    noRepeetContact(contact);
  };

  return (
    <>
      <h1 className={s.title}>My Phonebook</h1>
      <form className={s.form} onSubmit={handleAddContact}>
        <label style={{ marginBottom: '10px' }}>
          Name
          <input
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="Enter contact name"
            required
            onInput={onSetName}
            // onChange={options.handleChange}
          />
        </label>
        <label className={s.labelPhone}>
          Phone
          <input
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            placeholder="Enter contact phone"
            required
            onInput={onSetName}
            // onChange={options.handleChange}
          />
        </label>
        <button type="submit" className={s.button}>
          Отправить
        </button>
      </form>
    </>
  );
};

const mapStateToProps = state => ({
  phonebookContacts: phonebookSelectors.getPhonebookContacts(state),
});

const mapDispatchToProps = dispatch => {
  return {
    addContact: contact => dispatch(addContact(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

// import shortid from 'shortid';

// class ContactForm extends Component {
//   state = {
//     name: '',
//     tel: '',
//   };
//   nameInputId = shortid.generate();
//   telInputId = shortid.generate();

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   // formSubmitHandler = data => {
//   //   console.log(data);
//   // };

//   reset = () => {
//     this.setState({ name: '', tel: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} style={{ display: 'grid' }}>
//         <label htmlFor={this.nameInputId} style={{ marginBottom: '10px' }}>
//           Name
//           <input
//             value={this.state.name}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             placeholder="Enter contact name"
//             required
//             onChange={this.handleChange}
//             id={this.nameInputId}
//           />
//         </label>
//         <label htmlFor={this.telInputId}>
//           Phone
//           <input
//             value={this.state.tel}
//             type="tel"
//             name="tel"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             placeholder="Enter contact phone"
//             required
//             onChange={this.handleChange}
//             id={this.telInputId}
//           />
//         </label>
//         <button type="submit" style={{ width: '300px' }}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
