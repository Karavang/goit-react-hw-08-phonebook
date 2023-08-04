import { useSelector } from 'react-redux';
import ButtonLogout from './ButtonLogout';
import List from './ContactList';
import Filter from './Filter';
import Form from './Form';
import { getIsLogged, getUser } from 'redux/operations/regs';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contacts() {
  const user = useSelector(getUser);
  const showlog = useSelector(getIsLogged);
  const navigate = useNavigate();
  useEffect(() => {
    if (!showlog) {
      navigate('/login');
    }
  }, [showlog, navigate]);
  return (
    <div className="all-pos">
      <ul className="flexator g-20">
        <li>
          <h2>Phonebook</h2>
          <Form />
          <div>Hi,{user.email}</div>
        </li>

        <li className="li-contacts">
          <h2>Contacts</h2>
          <Filter />
          <List />
        </li>
      </ul>
      <ButtonLogout />
    </div>
  );
}
