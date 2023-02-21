import TestRenderer from 'react-test-renderer';
import App from '../App.js';
import Calculator from '../components/Calculator.js';
import HomePage from '../components/HomePage.js';
import QuotePage from '../components/QuotePage.js';
import CalculatorPage from '../components/CalculatorPage';
import { BrowserRouter } from 'react-router-dom';


describe('Snapshot testing components:',()=>{
  it('App renders correctly',()=>{
    const app = TestRenderer.create(<BrowserRouter><App /></BrowserRouter>).toJSON();
    expect(app).toMatchSnapshot();
  });

  it('Home Page renders correctly',()=>{
    const homePage = TestRenderer.create(<HomePage />).toJSON();
    expect(homePage).toMatchSnapshot();
  });

  it('Calculator Page renders correctly',()=>{
    const calcPage = TestRenderer.create(<CalculatorPage />).toJSON();
    expect(calcPage).toMatchSnapshot();
  });

  it('HomePage renders correctly',()=>{
    const quotePage = TestRenderer.create(<QuotePage />).toJSON();
    expect(quotePage).toMatchSnapshot();
  });
  it('calculator renders correctly', () => {
    const calc = TestRenderer
      .create(<Calculator />)
      .toJSON();
  
    expect(calc).toMatchSnapshot();
  });
});
