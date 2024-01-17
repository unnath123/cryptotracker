import './App.css';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Maincomponent from './components/LandingPage/Maincomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Maincomponent />
      </header>
    </div>
  );
}

export default App;
