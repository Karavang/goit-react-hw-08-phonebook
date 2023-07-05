import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations/regs';

export default function Registration() {
  const dispatch = useDispatch();
  const handleReg = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form);
    console.log({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleReg} className="form flexator">
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder="name"
      />
      <input
        type="email"
        name="email"
        className="form-control"
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        className="form-control"
        placeholder="password"
      />
      <button type="submit" className="btn btn-primary add-contact">
        Enter
      </button>
    </form>
  );
}
