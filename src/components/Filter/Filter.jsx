import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contactsFilter.js';
import { searchContact } from '../../redux/contacts/contactsActions.js';
import s from './Filter.module.css';
function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleOnChange = e => {
    dispatch(searchContact(e.target.value));
  };
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        placeholder="Enter a name"
        value={filter}
        onChange={handleOnChange}
      />
    </label>
  );
}
export default Filter;
