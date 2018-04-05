import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import HomeIndex from './components/Index';
// import {Function1} from './components/utils/function';

class App extends Component {
   // componentWillMount(){
  //   Function1();
  // }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeIndex} />
          <Route path="/test" component={HomeIndex} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
