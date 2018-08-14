import React from 'react';
import { connect } from 'react-redux';
import ExpesnseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = props => (
    <div>
      <p>Add expense Page.</p>
      <ExpesnseForm onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}/>
    </div>
);

export default connect()(AddExpensePage);
