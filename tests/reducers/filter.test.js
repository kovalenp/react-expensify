import moment from 'moment';
import filterReducer from '../../src/reducers/filters';
import filters from '../../src/enums/filters'

test('should setup default filter', () => {
  const state = filterReducer(undefined, {type: '@@INIT'});
  expect(state.text).toBe('');
  expect(state.sortBy).toBe('date');
  expect(state.startDate).toEqual(moment().startOf('month'))  
  expect(state.endDate).toEqual(moment().endOf('month'))  
});

test('should set sortBy to amount', () => {
  const state = filterReducer(undefined, {type: filters.SORT_BY_AMOUNT});
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const state = filterReducer({sortBy: 'amount'}, {type: filters.SORT_BY_DATE});
  expect(state.sortBy).toBe('date');
});

test('should set sort by text filter', () => {
  const state = filterReducer({text: 'textToBeReplaced'}, {type: filters.SET_TEXT_FILTER, text: 'testCase'});
  expect(state.text).toBe('testCase');
});

test('should set text filter', () => {
  const state = filterReducer({text: 'textToBeReplaced'}, {type: filters.SET_TEXT_FILTER, text: 'testCase'});
  expect(state.text).toBe('testCase');
});

test('should set satrtDate filter', () => {
  const state = filterReducer(undefined, {type: filters.SET_START_DATE, startDate: moment(1)});
  expect(state.startDate).toEqual(moment(1));
});

test('should set endDate filter', () => {
  const state = filterReducer(undefined, {type: filters.SET_END_DATE, endDate: moment(1)});
  expect(state.endDate).toEqual(moment(1));
});