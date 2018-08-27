import { addExpense, removeExpense, editExpense } from '../../src/actions/expenses';
import expenses from '../../src/enums/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: 'testRemove' });
  expect(action.type).toBe(expenses.REMOVE_EXPENSE);
  expect(action.id).toBe('testRemove');
});

test('should setup edit expense action object', () => {
  const action = editExpense('testEdit', { note: 'some test note' });
  expect(action.type).toBe(expenses.EDIT_EXPENSE);
  expect(action.id).toBe('testEdit');
  expect(action.updates).toEqual({ note: 'some test note' });
});

test('should setup add expense action object with provided values', () => {
  const testExpense = {
    amount: '10',
    createdAt: 1,
    description: 'test',
    note: 'note',
  };

  const action = addExpense(testExpense);
  expect(action.type).toBe(expenses.ADD_EXPENSE);
  expect(action.expense).toEqual({
    ...testExpense,
    id: expect.any(String),
  });
});

test('should setup add expense action object with provided values', () => {
  const defaults = {
    amount: 0,
    createdAt: 0,
    description: '',
    note: '',
  };

  const action = addExpense();
  expect(action.type).toBe(expenses.ADD_EXPENSE);
  expect(action.expense).toEqual({
    ...defaults,
    id: expect.any(String),
  });
});
