import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact, getContacts, getFilter } from 'redux/operations/thunks';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { fetchContacts } from 'redux/operations/thunks';

export default function List() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  console.log(filter);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="scrollable-list">
      <ul className="listContacts">
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className="li-con">
            <b>{name}</b> - {number}
            <button
              className="btn btn-primary add-contact"
              type="button"
              onClick={() => {
                handleDeleteContact(id);
                dispatch(fetchContacts());
              }}
            >
              <MdOutlineDeleteOutline />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
