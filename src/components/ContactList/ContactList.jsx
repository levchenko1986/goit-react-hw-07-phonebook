import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contactsFetch';
import { getVisibleContacts } from '../../redux/contacts/contactsFilter';

function ContactList() {
  const data = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul className={s.ContactList}>
      {data.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            <span className={s.list}>{name}</span>
            <span className={s.list}>{number}</span>
            <button
              key={id}
              className={s.button}
              type="button"
              onClick={() => {
                dispatch(deleteContacts(id));
              }}
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
