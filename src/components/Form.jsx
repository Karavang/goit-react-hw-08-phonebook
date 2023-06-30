import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/operations/thunks';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();

    const contact = { id: nanoid(), name, number };
    dispatch(addContact(contact));

    setName('');
    setNumber('');
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label>
        <h3 className="area-for-enter">Name</h3>
        <input
          type="text"
          name="name"
          value={name}
          className="form-control"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => setName(e.target.value)}
        />
      </label>

      <label>
        <h3 className="area-for-enter">Number</h3>
        <input
          type="tel"
          name="number"
          value={number}
          className="form-control"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={e => setNumber(e.target.value)}
        />
      </label>

      <button type="submit" className="btn btn-primary add-contact">
        Add
      </button>
    </form>
  );
}
