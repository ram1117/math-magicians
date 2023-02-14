import PropTypes from 'prop-types';

export const Button = (props) => {
  Button.defaultProps = { value: '', className: '' };
  Button.propTypes = { value: PropTypes.string, className: PropTypes.string };
  const { value, className } = props;
  return (
    <button className={`buttons ${className}`} type="button">{value}</button>);
};

export const CalcDisplay = (props) => {
  const { value } = props;
  CalcDisplay.defaultProps = { value: '0' };
  CalcDisplay.propTypes = { value: PropTypes.string };
  return (
    <div className="calc-display">{value}</div>);
};
