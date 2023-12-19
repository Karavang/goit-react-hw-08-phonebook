import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/operations/regs';
import Contacts from './Contacts';
import { Homepage } from './Homepage';
import { Layout } from './Layout';
import Login from './Login';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import Registration from './Registration';
// export default function Router() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Phonebook />}>
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Registration />} />
//         </Route>
//         <Route path="/contacts" element={<Contacts />} />
//       </Routes>
//     </>
//   );
// }
export const Router = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute>
              <Homepage />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute restricted>
              <Registration />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute restricted>
              <Login />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
};
