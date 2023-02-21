import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CalculatorPage from './components/CalculatorPage';
import QuotePage from './components/QuotePage';

const App = () => {
  const ghProfile = 'https://github.com/ram1117?tab=repositories';
  return (
    <>
      <nav>
        <h2>Math Magician</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="calculator">Calculator</Link></li>
          <li><Link to="quotes">Quote</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="quotes" element={<QuotePage />} />
      </Routes>
      <footer>
        <p>
          Developed and maintained by:
          <Link to={ghProfile} target="_blank">@ram1117</Link>
        </p>
      </footer>
    </>
  );
};

export default App;
