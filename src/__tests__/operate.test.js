import operate from '../logic/operate';

const testcases = [
  ['55', '25', '+', '80'], ['0', '35', '-', '-35'],
  ['10', '20', 'x', '200'], ['25', '5', '÷', '5'],
  ['50', '0', '÷', 'Can\'t divide by 0.'],
  ['13', '5', '%', '3'],
  ['13', '0', '%', 'Can\'t find modulo as can\'t divide by 0.'],
];

describe.each(testcases)('Testing operators logic:',
  (no1, no2, operand, expected) => {
    it(`Testing ${operand} logic:`, () => {
      const result = operate(no1, no2, operand);
      expect(result).toBe(expected);
    });
  });
