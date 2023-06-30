import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/operations/thunks';

export default function Filter() {
  const dispatch = useDispatch();
  console.log(setFilter);
  const filter = e => {
    dispatch(setFilter(e));
    console.log(e);
  };

  return (
    <input
      type="text"
      name="search"
      className="form-control"
      placeholder="Search by name"
      onChange={e => filter(e.target.value)}
    />
  );
}
