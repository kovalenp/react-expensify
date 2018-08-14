import React from 'react';
import ExpenseList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';

const HomePage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default HomePage;
