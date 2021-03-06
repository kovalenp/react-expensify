import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpensesList = props => (
    <div>
      <h3>ExpensesList</h3>
        {props.expenses.map(expense => <ExpenseListItem {...expense} key={expense.id}/>)}
    </div>
);

const mapStateToProps = state => ({ expenses: selectExpenses(state.expenses, state.filters) });

export default connect(mapStateToProps)(ExpensesList);
