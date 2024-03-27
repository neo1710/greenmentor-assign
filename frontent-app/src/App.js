import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './pages/AllRoutes';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
     <AllRoutes/>
    </div>
  );
}

export default App;
