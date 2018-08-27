import expenses from '../enums/expenses';

const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case expenses.ADD_EXPENSE:
      return [...state, action.expense];
    case expenses.REMOVE_EXPENSE:
      return state.filter(e => e.id !== action.id);
    case expenses.EDIT_EXPENSE:
      return state.map((e) => {
        if (e.id === action.id) {
          return {
            ...e,
            ...action.updates,
          };
        }
        return e;
      });
    default:
      return state;
  }
};

export default expenseReducer;
