import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Algorithms from './pages/Algorithms';
import DigitalPainting from './pages/DigitalPainting';
import About from './pages/About';

function App() {
  return (
    <div class='some-page-wrapper'>
      <Router>
      <div class='row'>
        <div class='columnNavbar'>
          <Navbar />
        </div>
        <div class='columnContent'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/algorithms' component={Algorithms} />
            <Route path='/digitalpainting' component={DigitalPainting} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </div>
      </Router>
    </div>
  );
}


export default App;

