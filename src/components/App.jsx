import { useSelector } from 'react-redux';
import List from './ContactList';
import Filter from './Filter';
import Form from './Form';
import Logmodal from './Logmodal';
import { getIsLogged, getUser } from 'redux/operations/regs';
import ButtonLogout from './ButtonLogout';

function Phonebook() {
  const showlog = useSelector(getIsLogged);
  const user = useSelector(getUser);
  console.log(user);
  return (
    <>
      {showlog ? (
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
      ) : (
        <Logmodal />
      )}
    </>
  );
}

export default Phonebook;
