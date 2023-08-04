import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { getIsLogged, getUser } from 'redux/operations/regs';
import Logmodal from './Logmodal';
import { useEffect, useState } from 'react';
function Phonebook() {
  const showlog = useSelector(getIsLogged);
  const user = useSelector(getUser);
  console.log(user);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const isLoggedIn = false;

      if (!isLoggedIn) {
        navigate('/login');
      }

      setIsLoading(false);
    }
  }, [isLoading, navigate]);
  return <>{showlog ? <Navigate to="/contacts" /> : <Logmodal />}</>;
}

export default Phonebook;
