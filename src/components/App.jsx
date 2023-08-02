import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLogged, getUser } from 'redux/operations/regs';
import Logmodal from './Logmodal';
function Phonebook() {
  const showlog = useSelector(getIsLogged);
  const user = useSelector(getUser);
  console.log(user);
  return <>{showlog ? <Navigate to="/contacts" /> : <Logmodal />}</>;
}

export default Phonebook;
