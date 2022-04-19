import logo from './logo.svg';
import './App.css';
import SearchAppBar from './Components/Navbar';
import { AllRoutes } from './AllRoutes/AllRoutes';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <AllRoutes />
    </div>
  );
}

export default App;
