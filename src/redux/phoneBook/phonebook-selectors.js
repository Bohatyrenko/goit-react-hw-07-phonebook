const getPhonebookContacts = state => state.contacts.phonebookContacts;
const getFilter = state => state.contacts.phonebookFilter;

const phonebookSelectors = {
  getPhonebookContacts,
  getFilter,
};

export default phonebookSelectors;
