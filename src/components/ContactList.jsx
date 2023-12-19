import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdOutlineDeleteOutline } from 'react-icons/md';
import {
  deleteContact,
  fetchContacts,
  getContacts,
} from 'redux/operations/thunks';

export default function List() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  console.log(contacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="scrollable-list">
      <ul className="listContacts">
        {contacts.map(({ id, name, number }) => (
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
