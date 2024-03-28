import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './pages/AllRoutes';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
