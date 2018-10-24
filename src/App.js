import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'

// Components
import Title from './Components/Title'
import SearchForm from './Components/SearchForm'
import MovieList from './Components/MovieList'
import Detail from './Pages/Detail'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      results: []
    }
  }

  handleResults = (results) => {
    this.setState({
      results
    })
  }

  render() {
    const {results} = this.state
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className='SearchForm-wrapper'>
          <SearchForm onResults={this.handleResults} />
        </div>
        {
          results.length === 0
            ? <p>Sin resultados</p>
            : <MovieList movies={results} />
        }
      </div>
    );
  }
}

export default App;
