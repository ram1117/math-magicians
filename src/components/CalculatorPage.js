import styles from '../styles/CalculatorPage.module.css';
import Calculator from './Calculator';

const CalculatorPage = () => (
  <>
    <div className={styles.wrapper}>
      <h2>Let&apos;s do some Math Magic</h2>
      <Calculator className={styles.calculator} />
    </div>
  </>
);

export default CalculatorPage;
