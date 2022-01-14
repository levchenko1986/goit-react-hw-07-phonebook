export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getFilteredContacts = state => {
  const filter = state.contacts.filter;
  const items = state.contacts.items;
  const normalizedFilter = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
