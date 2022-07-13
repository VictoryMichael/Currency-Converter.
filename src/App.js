import "./index.css"
import CurrencyConverter from './Component/CurrencyConverter';
import NewsFeed from './Component/NewsFeed';



function App() {
  return (
    <div className="app-container">
       <CurrencyConverter />

       <NewsFeed />
    </div>
  );
}

export default App;
