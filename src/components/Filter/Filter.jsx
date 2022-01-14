import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contactsFilter.js';
import { changeFilter } from '../../redux/contacts/contactsActions.js';
import styles from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={handleOnChange}
        placeholder="contact"
        autoComplete="on"
      />
    </label>
  );
}

export default Filter;
