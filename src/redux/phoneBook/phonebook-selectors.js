const getPhonebookContacts = state => state.phonebookContacts;
const getFilter = state => state.phonebookFilter;

const phonebookSelectors = {
  getPhonebookContacts,
  getFilter,
};

export default phonebookSelectors;
