import css from '../Contacts/Contacts.module.css';

import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';
import { deleteContact, getAllContacts } from 'redux/operations';
import { useEffect } from 'react';

const Contacts = ({ title }) => {
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const onFilter = e => {
    const filterValue = e.target.value;
    dispatch(filterContacts(filterValue));
  };

  const onItemDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredSearch = () => {
    const normaliseFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normaliseFilter)
    );
  };

  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>

      <label className={css.header}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onFilter}
      />

      <ul>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        {items.length > 0 &&
          filteredSearch().map(({ id, name, phone }) => (
            <li key={id}>
              <p className={css.contact}>
                {name}: {phone}
              </p>
              <button
                className={css.btn}
                type="button"
                onClick={() => {
                  onItemDelete(id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
};

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Contacts;
