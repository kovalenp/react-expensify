import React from 'react'
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => {
  return (
    <div>
      <p>{description}</p>
      <p>Amount: {amount} on: {createdAt}</p>
      <button onClick={() => {dispatch(removeExpense({ id }))}}>Remove</button>
    </div>
  );
}

export default connect()(ExpenseListItem);