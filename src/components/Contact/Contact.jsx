import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

import css from './Contact.module.css';

const Contact = ({ contact: { id, name, phone }, onDelete,}) => (
  <li className={css.contact}>
    <div className={css.details}>
      <div className={css.info}>
        <FaUser /> {name}
      </div>
      <div className={css.info}>
        <FaPhoneAlt /> {phone}
      </div>
    </div>
    <button type="button" onClick={() => onDelete(id)}>Delete</button>
  </li>
);

export default Contact;
