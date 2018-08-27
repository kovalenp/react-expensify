import enums from '../enums/filters';

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: enums.SET_TEXT_FILTER,
  text,
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: enums.SORT_BY_DATE,
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: enums.SORT_BY_AMOUNT,
});

// SET_START_DATE
export const setStartDate = (startDate = undefined) => ({
  type: enums.SET_START_DATE,
  startDate,
});

// SET_END_DATE
export const setEndDate = (endDate = undefined) => ({
  type: enums.SET_END_DATE,
  endDate,
});
