import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import Container from "./components/Container";
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
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
          <h2>Contacts</h2>
            <Filter />
          <ContactList />
        </Container>
  );
}
export default App;
