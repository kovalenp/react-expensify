import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <header>
      Expensify
    </header>
      <NavLink activeClassName='selected-menu' exact to='/'>Home</NavLink>
      <NavLink activeClassName='selected-menu' to='/create'>Add Expense</NavLink>
      <NavLink activeClassName='selected-menu' to='/help'>Help</NavLink>
  </div>
);

export default Header;
