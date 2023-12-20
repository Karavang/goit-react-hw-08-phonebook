import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/operations/regs';

export default function Login() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form);
    console.log({
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };
  return (
    <form className="flexator form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="email"
        name="email"
      />
      <input
        type="password"
        className="form-control"
        placeholder="password"
        name="password"
      />
      <button type="submit" className="btn btn-primary add-contact">
        Войти
      </button>
    </form>
  );
}
