import { useSelector } from 'react-redux';
import ButtonLogout from './ButtonLogout';
import List from './ContactList';
import Filter from './Filter';
import Form from './Form';
import { getUser } from 'redux/operations/regs';

export default function Contacts() {
  const user = useSelector(getUser);
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
