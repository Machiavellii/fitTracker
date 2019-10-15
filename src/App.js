import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FittrackState from './contex/fitnesstrack/FittrackState';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Day from './components/fitinfo/Day';

import './App.css';

function App() {
  return (
    <FittrackState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/day" component={Day} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </FittrackState>
  );
}

export default App;
