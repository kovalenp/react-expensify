import moment from 'moment';
import selectExpenses from '../../src/selectors/expenses';
import testExpenses from '../fixtures/testExpenses';

test('should filter by text value', () => {
  const filters = { text: 'Boo', sortBy: 'date', startDate: undefined, endDate: undefined}
  const result = selectExpenses(testExpenses, filters);
  expect(result).toEqual([testExpenses[1]]);
});

test('should filter by startDate', () => {
  const filters = { text: '', sortBy: 'date', startDate: moment(0), endDate: undefined}
  const result = selectExpenses(testExpenses, filters);
  expect(result).toEqual([testExpenses[2], testExpenses[0]]);
});


test('should filter by endDate', () => {
  const filters = { text: '', sortBy: 'date', startDate: undefined, endDate: moment(0).subtract(1, 'day')}
  const result = selectExpenses(testExpenses, filters);
  expect(result).toEqual([testExpenses[1]]);
});


test('should sort by date', () => {
  const filters = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined}
  const result = selectExpenses(testExpenses, filters);
  expect(result).toEqual([testExpenses[2], testExpenses[0], testExpenses[1]]);
});

test('should sort by amount', () => {
  const filters = { text: '', sortBy: 'amount', startDate: undefined, endDate: undefined}
  const result = selectExpenses(testExpenses, filters);
  expect(result).toEqual([testExpenses[2], testExpenses[1], testExpenses[0]]);
});