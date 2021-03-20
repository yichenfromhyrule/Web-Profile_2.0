import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Algorithms from './pages/Algorithms';
import DigitalPainting from './pages/DigitalPainting';
import About from './pages/About';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/algorithms' component={Algorithms} />
          <Route path='/digitalpainting' component={DigitalPainting} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
      
    </div>  
  );
}


export default App;

