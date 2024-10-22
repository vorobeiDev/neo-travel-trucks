import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps.js';
import { selectFilteredContacts } from '../../redux/contactsSlice.js';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import EmptyPhonebookMessage from '../EmptyContactList/EmptyPhonebookMessage.jsx';
import Loader from '../Loader/Loader.jsx';
import SearchBox from '../SearchBox/SearchBox';

import './App.css'

const App = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.contacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {!loading && !error && filteredContacts?.length > 0 && <ContactList/>}
      {!loading && !error && filteredContacts?.length === 0 && <EmptyPhonebookMessage />}
    </div>
  );
};

export default App;
