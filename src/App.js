import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'

// Components
import Home from './Pages/Home'
import Detail from './Pages/Detail'

class App extends Component {

  render() {
    const url = new URL(document.location)
    const hasId = url.searchParams.has('id')

    if ( hasId) {
      return <Detail id={url.searchParams.get('id')}/>
    }
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
