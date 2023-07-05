import React from 'react';
import Login from './Login';
import Registration from './Registration';

export default function Logmodal() {
  return (
    <div className="modal-log">
      <ul className="nav nav-tabs flexator" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
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
        </li>
        <li className="nav-item" role="presentation">
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
        </li>
      </ul>
      <div className="tab-content flexator" id="myTabContent">
        <div
          className="tab-pane fade show active flexator"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
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
