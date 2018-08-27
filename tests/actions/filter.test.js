import moment from 'moment';
import filters from '../../src/enums/filters';
import { 
  sortByAmount,
  sortByDate,
  setStartDate,
  setTextFilter,
  setEndDate
 } from '../../src/actions/filter';

test('should setup sortByAmount filter object', () => {
  const action = sortByAmount();
  expect(action.type).toBe(filters.SORT_BY_AMOUNT);
});

test('should setup sortByDate filter object', () => {
  const action = sortByDate();
  expect(action.type).toBe(filters.SORT_BY_DATE);
});

test('should setup setStartDate filter object', () => {
  const action = setStartDate(moment(0));
  expect(action.type).toBe(filters.SET_START_DATE);
  expect(action.startDate).toEqual(moment(0));
});

test('should setup setEndDate filter object', () => {
  const action = setEndDate(moment(10));
  expect(action.type).toBe(filters.SET_END_DATE);
  expect(action.endDate).toEqual(moment(10));
});

test('should setup text filter object with provided value', () => {
  const action = setTextFilter('testFilter');
  expect(action.type).toBe(filters.SET_TEXT_FILTER);
  expect(action.text).toBe('testFilter');
});

test('should setup text filter object with default value', () => {
  const action = setTextFilter();
  expect(action.type).toBe(filters.SET_TEXT_FILTER);
  expect(action.text).toBe('');
});