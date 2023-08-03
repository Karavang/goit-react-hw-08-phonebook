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
    // Здесь вы можете выполнить любые действия, которые необходимо сделать после начала загрузки страницы

    // Пример: Проверка условия и перенаправление на /login, если нужно
    if (isLoading) {
      // Установите условие в соответствии с вашими требованиями
      const isLoggedIn = false; // Здесь должна быть логика проверки авторизации пользователя

      if (!isLoggedIn) {
        navigate('/login');
      }

      setIsLoading(false);
    }
  }, [isLoading, navigate]);
  return <>{showlog ? <Navigate to="/contacts" /> : <Logmodal />}</>;
}

export default Phonebook;
