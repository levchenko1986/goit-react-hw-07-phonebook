import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contactsFetch';
import { getFilteredContacts } from '../../redux/contacts/contactsFilter';

function ContactList() {
  const data = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContacts = (id) => dispatch(deleteContacts(id));
  return (
    <ul>
      {data.map(({ id, name, phone }) => {
        return (
          <li key={id} className={styles.item}>
            <span className={styles.list}>{name}</span>
            <span className={styles.list_number}>{phone}</span>
            <button
              key={id}
              className={styles.button}
              type="button"
              onClick={() => onDeleteContacts(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default ContactList;
