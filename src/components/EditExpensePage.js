import React from 'react';
import { connect } from 'react-redux';
import ExpesnseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = props => (
    <div>
      <p>Editing expense with id: {props.match.params.id}</p>
      <ExpesnseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}/>
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
      }}>Remove</button>
    </div>
);

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(e => e.id === props.match.params.id),
});

export default connect(mapStateToProps)(EditExpensePage);
