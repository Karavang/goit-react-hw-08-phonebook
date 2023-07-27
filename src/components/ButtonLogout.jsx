import { FiLogOut } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/operations/regs';

export default function ButtonLogout() {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  return (
    <>
      <div className="logout flexator" onClick={handleLogout}>
        <FiLogOut />
      </div>
    </>
  );
}
