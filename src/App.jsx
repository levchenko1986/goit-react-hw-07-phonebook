import React, { useEffect } from 'react';
import s from './App.css';
import { useDispatch } from 'react-redux';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';
import { getAllContacts } from 'redux/contacts/contactsFetch';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
    </div>
  );
}
export default App;
