import React from 'react'
import ExpesnseForm from './ExpenseForm'
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses'
import { dispatch } from 'rxjs/internal/observable/pairs';

const AddExpensePage = (props) => {
  return (
    <div>
      <p>Add expense Page.</p>
      <ExpesnseForm onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}/>
    </div>
  );
}

export default connect()(AddExpensePage);