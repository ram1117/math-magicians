import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CalculatorPage from './components/CalculatorPage';
import QuotePage from './components/QuotePage';

const App = () => {
  const ghProfile = 'https://github.com/ram1117?tab=repositories';
  return (
    <>
      <nav className="nav-bar">
        <h2 className="app-logo">Math Magician</h2>
        <ul className="nav-list">
          <li className="nav-items"><Link to="/">Home</Link></li>
          <li className="nav-items"><Link to="calculator">Calculator</Link></li>
          <li className="nav-items"><Link to="quotes">Quote</Link></li>
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
          <Link className="profile-link" to={ghProfile} target="_blank"> @ram1117</Link>
        </p>
      </footer>
    </>
  );
};

export default App;
