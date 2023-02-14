import { Button, CalcDisplay } from './Buttons';

const Calculator = () => (
  <div className="calc-container">
    <>
      <CalcDisplay value="0" />
    </>
    <>
      <Button value="AC" />
      <Button value="+/-" />
      <Button value="%" />
      <Button value="÷" className="yellow" />
    </>
    <>
      <Button value="7" />
      <Button value="8" />
      <Button value="9" />
      <Button value="x" className="yellow" />
    </>
    <>
      <Button value="4" />
      <Button value="5" />
      <Button value="6" />
      <Button value="-" className="yellow" />
    </>
    <>
      <Button value="1" />
      <Button value="2" />
      <Button value="3" />
      <Button value="+" className="yellow" />
    </>
    <>
      <Button value="0" className="zero-button" />
      <Button value="." />
      <Button value="=" className="yellow" />
    </>
  </div>
);
export default Calculator;
