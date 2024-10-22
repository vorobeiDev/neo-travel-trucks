import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice.js';
import css from './EmptyPhonebookMessage.module.css';

const EmptyPhonebookMessage = () => {
  const contacts = useSelector(selectContacts);

  return (
    <p className={css.message}>
      {contacts.length === 0
          ? 'Your phonebook is empty use form to add contact'
          : 'Contact not found'
      }
    </p>
  );
};

export default EmptyPhonebookMessage;
