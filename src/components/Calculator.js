const Calculator = () => (
  <div className="calc-container">
    <>
      <div className="calc-display">0</div>
    </>
    <>
      <button className="buttons" type="button">AC</button>
      <button className="buttons" type="button">+/-</button>
      <button className="buttons" type="button">%</button>
      <button className="buttons yellow" type="button">÷</button>
    </>
    <>
      <button className="buttons" type="button">7</button>
      <button className="buttons" type="button">8/-</button>
      <button className="buttons" type="button">9</button>
      <button className="buttons yellow" type="button">x</button>
    </>
    <>
      <button className="buttons" type="button">4</button>
      <button className="buttons" type="button">5</button>
      <button className="buttons" type="button">6</button>
      <button className="buttons yellow" type="button">-</button>
    </>
    <>
      <button className="buttons" type="button">1</button>
      <button className="buttons" type="button">2</button>
      <button className="buttons" type="button">3</button>
      <button className="buttons yellow" type="button">+</button>
    </>
    <>
      <button className="buttons zero-button" type="button">0</button>
      <button className="buttons" type="button">.</button>
      <button className="buttons yellow" type="button">=</button>

    </>
  </div>
);
export default Calculator;
