import {
  fireEvent, screen, render,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Calculator from '../components/Calculator';
import App from '../App';

const testcases = [['AC', ''], ['=', ''], ['1', '1'], ['%', '%'], ['x', 'x']];
describe.each(testcases)('React test library Button tests:', (input, expected) => {
  it(`Testing onclick on ${input} button`, async () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText(input));
    expect(screen.getByTestId('calc-display')).toHaveTextContent(expected);
  });
});

const testcases2 = [
  ['Home', 'home-header', 'Welcome to Math Magician Page!!!'],
  ['Calculator', 'calc-header', 'Let\'s do some Math Magic'],
  ['Quote', 'quote-author', '— Richard Courant'],
];

describe.each(testcases2)('testing onclick on Navigation buttons:',
  (btn, dataId, expected) => {
    it(`testing onclick on ${btn} button:`, () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );
      fireEvent.click(screen.getByText(btn));
      
      expect(screen.getAllByText(expected).length).toBe(1);
    });
  });
