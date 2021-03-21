import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Algorithms from './pages/Algorithms';
import DigitalPainting from './pages/DigitalPainting';
import About from './pages/About';

function App() {
  return (
    <Container>
      <Router>
        <Row>
          <Col xs lg="3">
            <Navbar />
          </Col>
          <Col xs lg="9">
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/algorithms' component={Algorithms} />
              <Route path='/digitalpainting' component={DigitalPainting} />
              <Route path='/about' component={About} />
            </Switch>
          </Col>
        </Row>
        
        
      </Router>
      
    </Container>  
  );
}


export default App;

