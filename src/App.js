import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Work from './components/work';
import Resume from './components/resume';
import Nav from './components/Nav';
import Home from './components/home';
import Games from './components/games';
import './App.css';


function App() {
  return (
    <Router>
    <div className='App'>
      <Nav />
      <Route exact path='/home' component={Home} />
      <Switch>
        <Route exact path='/work' component={Work} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/games' component={Games} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
