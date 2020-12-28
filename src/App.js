
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home'
import Navbar from './components/navbar'
import Login from './pages/login'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Login/>
    </div>
  );
}

export default App;
