import List from './ContactList';
import Filter from './Filter';
import Form from './Form';

function Phonebook() {
  return (
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
  );
}

export default Phonebook;
