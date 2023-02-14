import './Calculator.css';

const Calculator = () => {
  const handleClick = (event) => {
    console.log(event.target.textContent);
  };

  const calcBtnText = ['AC', '+/-', '%', '÷', '7', '8', '9',
    'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div className="calc-container" role="button" tabIndex={0} onClick={handleClick} onKeyDown={() => { }}>
      <>
        <div className="calc-display">0</div>
      </>
      {
        calcBtnText.map((item) => <button className="buttons" key={item} type="button">{item}</button>)
      }
    </div>
  );
};
export default Calculator;
