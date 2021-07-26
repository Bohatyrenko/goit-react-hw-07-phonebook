import { useEffect } from 'react';
import style from '../ContactList/contactList.module.css';
import getFilteredContacts from '../../helpers/filterContacts';
import { connect } from 'react-redux';
import {
  deleteContact,
  contactFetch,
} from '../../redux/phoneBook/phonebook-operations';
import phonebookSelectors from '../../redux/phoneBook/phonebook-selectors';

const ContactList = ({ contacts, filter, deleteContact, onContactFetch }) => {
  console.log('contacts', contacts);
  console.log('filter', filter);
  const contactsArr = getFilteredContacts(contacts, filter);

  useEffect(() => {
    onContactFetch();
  }, [onContactFetch]);
  return (
    <div>
      <h2>Contacts</h2>
      <ul className={style.list}>
        {contactsArr.map(({ name, number, id }) => (
          <li key={id}>
            <p>Name:{name}</p>
            <p>Number:{number}</p>
            <button id={id} onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getPhonebookContacts(state),
  filter: phonebookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(deleteContact(id)),
    onContactFetch: () => dispatch(contactFetch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
