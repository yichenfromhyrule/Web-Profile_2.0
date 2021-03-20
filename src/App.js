import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LeftSideNav from './components/LeftSideNav/LeftSideNav';

function App() {
  return (
    <div className="container">
      <LeftSideNav name="Yichen" />
    </div>  
  );
}


export default App;

