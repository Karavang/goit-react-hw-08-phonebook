import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/operations/selectors';

export const PublicRoute = ({ children, restricted = false }) => {
  const token = useSelector(selectToken);

  console.log(token, restricted);
  const shouldRedirect = token ? true : false;
  console.log(shouldRedirect);
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
};
