import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'

// Components
import Home from './Pages/Home'
import Detail from './Pages/Detail'

class App extends Component {

  render() {
    const url = new URL(document.location)
    const page = url.searchParams.has('id')
      ? <Detail id={url.searchParams.get('id')}/>
      : <Home />

    return (
      <div className="App">
        {page}
      </div>
    );
  }
}

export default App;
