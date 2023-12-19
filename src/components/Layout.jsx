import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      {/* <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </header> */}
      <main>{<Outlet />}</main>
    </>
  );
};
