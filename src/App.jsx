import React, { Component } from 'react';
import './App.css';
import Beers from './views/Beers';
import NewBeer from './views/NewBeer';
import RandomBeer from './views/RandomBeer';
import Home from './views/Home';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ textAlign: 'center' }}>
        <BrowserRouter>
          <Switch>
            <Route path="/beers" exact component={Beers} />} />
            <Route path="/random" component={RandomBeer} exact />
            <Route path="/create" component={NewBeer} exact />
            <Route path="/" component={Home} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
