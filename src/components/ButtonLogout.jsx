import { FiLogOut } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/operations/regs';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

export default function ButtonLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      navigate('/login');
    });
  };

  return (
    <>
      <div className="logout flexator" onClick={handleLogout}>
        <FiLogOut />
      </div>
    </>
  );
}
