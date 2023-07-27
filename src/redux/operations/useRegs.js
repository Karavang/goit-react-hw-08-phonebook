import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLogged,
  selectIsLoading,
} from 'redux/operations/selectors';

export default function useAuth() {
  const isLogged = useSelector(selectIsLogged);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);

  return {
    isLogged,
    isLoading,
    user,
  };
}
