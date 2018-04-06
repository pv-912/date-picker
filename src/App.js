import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainIndex from './components/Index';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainIndex} />
        </Switch>
      </Router>
    );
  }
}

export default App;
