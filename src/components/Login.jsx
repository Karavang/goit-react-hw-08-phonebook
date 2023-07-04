import React from 'react';

export default function Login() {
  return (
    <>
      <h2>Login</h2>
      <form action="submit flexator">
        <input type="text" className="form-control" placeholder="email" />
        <input
          type="password"
          className="form-control"
          placeholder="password"
        />
        <button type="submit" className="btn btn-primary add-contact">
          Enter
        </button>
      </form>
    </>
  );
}
