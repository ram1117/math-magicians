import { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcData, setCalcData] = useState({ total: '0', next: '', operation: '' });
  const handleClick = (event) => {
    setCalcData(calculate(calcData, event.target.textContent));
  };
  const calcBtnText = ['AC', '+/-', '%', '÷', '7', '8', '9',
    'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div className="calc-container">
      <>
        <div className="calc-display" data-testid="calc-display">
          {calcData.total}
          {calcData.operation}
          {calcData.next}
        </div>
      </>
      {
        calcBtnText.map((item) => <button className="buttons" onClick={(event) => { handleClick(event); }} key={item} type="button">{item}</button>)
      }
    </div>
  );
};
export default Calculator;
