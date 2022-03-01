import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Home></Home>
        <Footer></Footer> 
      </Router>
    </div>
  );
}

export default App;
