import './App.css';
import CurrencyDropDown from './components/dropdowns/CurrencyDropDown';
import Navbar from './components/Navbar'
import CryptoCurrencyDropdown from './components/dropdowns/CryptoCurrencyDropdown';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <CurrencyDropDown/>
      <CryptoCurrencyDropdown/>
    </div>
  );
}

export default App;
