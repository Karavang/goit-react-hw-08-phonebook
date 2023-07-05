import React from 'react';

export default function Registration() {
  const handleReg = e => {
    e.preventDefault();
  };
  return (
    <>
      <h2 className="area-for-enter">Registration</h2>
      <form onSubmit={handleReg} className="form flexator">
        <input type="text" className="form-control" placeholder="name" />
        <input type="email" className="form-control" placeholder="email" />
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
