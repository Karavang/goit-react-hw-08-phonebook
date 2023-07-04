import React from 'react';

export default function Registration() {
  return (
    <>
      <h2 className="area-for-enter">Registration</h2>
      <form action="submit" className="form flexator">
        <input type="text" className="form-control" placeholder="name" />
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
