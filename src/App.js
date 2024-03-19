import './App.css';
import CurrencyDropDown from './components/dropdowns/CurrencyDropDown';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CurrencyDropDown/>
    </div>
  );
}

export default App;
