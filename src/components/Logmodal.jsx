import { Link } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
export default function Logmodal() {
  return (
    <div className="modal-log">
      <ul className="nav nav-tabs flexator" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <Link to="login" className="li-of-titles">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Login
            </button>
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link to="register" className="li-of-titles">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Registration
            </button>
          </Link>
        </li>
      </ul>
      <div className="tab-content flexator" id="myTabContent">
        <div
          className="tab-pane fade show active flexator"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <h2>Login</h2>
          <Login />
        </div>
        <div
          className="tab-pane fade flexator"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <h2 className="area-for-enter">Registration</h2>
          <Registration />
        </div>
      </div>
    </div>
  );
}
