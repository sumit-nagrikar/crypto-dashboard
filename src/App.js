import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";
import CoinDataFetcher from "./components/newComponents/CoinDataFetcher";
import CoinTable from "./components/newComponents/CoinTable";

function App() {
  return (
    <div className="App">
      <Home />
      {<Sidebar />}

      <CoinDataFetcher>
        <CoinTable />
      </CoinDataFetcher>
    </div>
  );
}

export default App;
