import calculate from '../logic/calculate';

const testcases = [
  [{ total: '20', next: '10', operation: '+' }, 'AC', { total: null, next: null, operation: null }],
  [{ total: '20', next: '0', operation: '+' }, '0', {}],
  [{ total: '20', next: '10', operation: '-' }, '5', { total: '20', next: '105', operation: '-' }],
  [{ total: '20', next: null, operation: '-' }, '5', { total: '20', next: '5', operation: '-' }],
  [{ total: '20', next: '10', operation: null }, '3', { total: null, next: '103' }],
  [{ total: '0', next: '50.', operation: null }, '.', { total: '0', next: '50.', operation: null }],
  [{ total: '0', next: '2', operation: null }, '.', { total: '0', next: '2.', operation: null }],
  [{ total: null, next: null, operation: '+' }, '.', { total: null, next: '0.', operation: '+' }],
  [{ total: '50.', next: null, operation: null }, '.', {}],
  [{ total: '25', next: '25', operation: 'x' }, '=', { total: '625', next: null, operation: null }],
  [{ total: '25', next: '25', operation: null }, '=', {}],
  [{ total: null, next: '25', operation: null }, '+/-', { total: null, next: '-25', operation: null }],
  [{ total: '88', next: null, operation: null }, '+/-', { total: '-88', next: null, operation: null }],
  [{ total: '65', next: null, operation: '=' }, '+', { total: '65', next: null, operation: '+' }],
  [{ total: '65', next: '25', operation: '+' }, 'x', { total: '90', next: null, operation: 'x' }],
  [{ total: null, next: '87', operation: '+' }, 'x', { total: 0, operation: 'x' }],
  [{ total: '65', next: '25', operation: '+' }, 'x', { total: '90', next: null, operation: 'x' }],
  [{ total: '75', next: '25', operation: '÷' }, '÷', { total: '3', next: null, operation: '÷' }],
  [{ next: null, operation: '÷' }, '÷', { total: 0, operation: '÷' }],
  [{ total: null, next: '25', operation: null }, 'x', { total: '25', next: null, operation: 'x' }],

];

describe.each(testcases)('testing Calculate logic:', (obj, btn, expected) => {
  test(`Testing ${btn} button logic:`, () => {
    const result = calculate(obj, btn);
    expect(result).toStrictEqual(expected);
  });
});
