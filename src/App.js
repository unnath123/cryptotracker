import './App.css';
import HomePage from './pages/Home';
import Dashboard from './pages/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import CoinPage from './pages/Coin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path="/coin/:id" element={<CoinPage/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
