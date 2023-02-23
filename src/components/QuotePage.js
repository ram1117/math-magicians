import styles from '../styles/QuotePage.module.css';

const QuotePage = () => (
  <>
    <blockquote className={styles['quote-block']}>
      “Mathematics as an expression of the human mind reflects the active will,
      the contemplative reason, and the desire for aesthetic perfection.
      Its basic elements are logic and intuition, analysis and construction,
      generality and individuality.”
      <br />
      <span data-testid="quote-author">— Richard Courant</span>
    </blockquote>
  </>
);

export default QuotePage;
