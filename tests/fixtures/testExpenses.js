import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Rent',
    note: '',
    amount: 100,
    createdAt: 0,
  },
  {
    id: '2',
    description: 'Books',
    note: 'Programming books',
    amount: 1000,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
  },
  {
    id: '3',
    description: 'Alchohol',
    note: 'Life is hard',
    amount: 20000,
    createdAt: moment(0).add(2, 'days').valueOf(),
  }
];
