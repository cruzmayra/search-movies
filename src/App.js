import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bulma/css/bulma.css'

// Components
import Home from './Pages/Home'
import Detail from './Pages/Detail'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:id' component={Detail} />
        </Switch>
      </div>
    );
  }
}

export default App;
