import { Route, Routes } from 'react-router-dom';
import Contacts from './Contacts';
import Phonebook from './App';
import Login from './Login';
import Registration from './Registration';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Phonebook />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
        </Route>
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}