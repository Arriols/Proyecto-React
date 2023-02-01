import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./components/navegacion/Navbar"; 
import Inicio from "./components/pages/Inicio"
import Avex from "./components/pages/Avex"
import Productos from "./components/pages/Productos"

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
      </Router>

    </div>
  );
}

export default App;
