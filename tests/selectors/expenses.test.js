import selectExpenses from '../../src/selectors/expenses';

const testExpenses = [
  {
    id: '1',
    description: 'Rent',
    note: '',
    amount: 100,
    createdAt: 1
  },
  {
    id: '2',
    description: 'Books',
    note: 'Programming books',
    amount: 10,
    createdAt: -1
  },
  {
    id: '3',
    description: 'Alchohol',
    note: 'Life is hard',
    amount: 10000,
    createdAt: 10
  }
];

test('should filter by text value', () => {
  const filters = { text: 'Boo', sortBy: 'date', startDate: undefined, endDate: undefined}
  const result = selectExpenses(testExpenses, filters);
  expect(result).toEqual([testExpenses[1]])
});