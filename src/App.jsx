import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/common/Menu';
import UnitPriceCalculator from './pages/UnitPriceCalculator';

const Home = () => <h1>Home</h1>;

function App() {
  return (
    <Router>
      <div className="grid">
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/unit-price-calculator" element={<UnitPriceCalculator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;