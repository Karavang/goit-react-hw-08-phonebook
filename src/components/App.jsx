import { useDispatch, useSelector } from 'react-redux';
import List from './ContactList';
import Filter from './Filter';
import Form from './Form';
import Logmodal from './Logmodal';
import { getIsLogged } from 'redux/operations/regs';

function Phonebook() {
  const showlog = useSelector(getIsLogged);

  return (
    <>
      {showlog ? (
        <div className="all-pos">
          <ul className="flexator g-20">
            <li>
              <h2>Phonebook</h2>
              <Form />
            </li>

            <li className="li-contacts">
              <h2>Contacts</h2>
              <Filter />
              <List />
            </li>
          </ul>
        </div>
      ) : (
        <Logmodal />
      )}
    </>
  );
}

export default Phonebook;
