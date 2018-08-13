import uuid from 'uuid';
import { createStore, combineReducers } from 'redux';



const demoState = {
  expenses: [{
    id: 'asdf',
    description: 'crossfit membership',
    note: 'start tarif',
    amount: 7500,
    createdAt: '2018-08-01'
  }],
  filters: {
    text: 'rent',
    sortBy: 'date',
    startdate: undefined,
    endDate: undefined,
  }

}

// ADD_EXPENSE
const addExpense = (
  { description = '',
    note = '',
    amount = 0,
    createdAt = 0 
  } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ( {id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

// EDIT_EXPENSE
const editExpense = ( id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});



const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
}

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

const expenseReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(e => e.id != action.id);
    case 'EDIT_EXPENSE':
      return state.map((e) => {
        if (e.id == action.id) {
          return {
            ...e,
            ...action.updates
          };
        } else {
          return e;
        }
      })
    default:
      return state;
  }
};


const filterData = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer,
  })
);

store.subscribe(() => {
  const state = store.getState()
  const filteredData = filterData(state.expenses, state.filters)
  console.log(filteredData)
});




const rentalExpense = store.dispatch(addExpense( {description: 'Rent', amount: 10000, createdAt: 1000}))
const coffeeExpense = store.dispatch(addExpense( {description: 'Coffee', amount: 300, createdAt: 10}))
// store.dispatch(removeExpense( {id: rentalExpense.expense.id}));
// store.dispatch(editExpense(coffeeExpense.expense.id, { amount: 200 }));
// store.dispatch(setTextFilter('Rent'));
store.dispatch(setStartDate(1));
store.dispatch(setEndDate(1001));

