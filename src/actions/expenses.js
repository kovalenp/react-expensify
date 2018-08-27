import uuid from 'uuid';
import enums from '../enums/expenses';

// ADD_EXPENSE
export const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
  } = { },
) => ({
  type: enums.ADD_EXPENSE,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: enums.REMOVE_EXPENSE,
  id,
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: enums.EDIT_EXPENSE,
  id,
  updates,
});
