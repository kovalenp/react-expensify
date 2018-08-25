import filterReducer from '../../src/reducers/filters';

test('should setup default filter', () => {
  const state = filterReducer(undefined, {type: '@@INIT'});
});
