import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='nav'>
      <NavLink to="/">Contacts</NavLink>
      <NavLink to="/appointments">Appointments</NavLink>
    </div>
  );
}
