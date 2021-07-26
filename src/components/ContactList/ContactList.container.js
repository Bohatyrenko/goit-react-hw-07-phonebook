// import { connect } from 'react-redux';
// import {
//   deleteContact,
//   contactFetch,
// } from '../../redux/phoneBook/phonebook-operations';
// import ContactList from './ContactList';
// import phonebookSelectors from '../../redux/phoneBook/phonebook-selectors';

// const mapStateToProps = state => ({
//   contacts: phonebookSelectors.getPhonebookContacts(state),
//   filter: phonebookSelectors.getFilter(state),
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     deleteContact: id => dispatch(deleteContact(id)),
//     onContactFetch: () => dispatch(contactFetch()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
