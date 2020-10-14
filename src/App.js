import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import AboutMe from './components/pages/AboutMe';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog' component={Blog} />
        <Route path='/about-me' component={AboutMe} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      
    </Router>
    
  );
}


export default App;

