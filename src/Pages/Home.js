import React from 'react'
import Title from '../Components/Title'
import SearchForm from '../Components/SearchForm'
import MovieList from '../Components/MovieList'

const API_KEY = 'e2a13753'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputMovie: '',
      results: [],
      error: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      inputMovie: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {inputMovie} = this.state

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .catch(error => console.log(error))
      .then(results => {
        if(results.Error) {
          this.setState({error: results.Error, results: []})
        } else {
          const {Search} = results
          this.setState({error: '', results: Search})
        }
      })
  }

  render () {
    const {results, error} = this.state
    return (
      <div>
        <Title>Search Movies</Title>
        <div className='SearchForm-wrapper'>
          <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
        {
          error !== ''
            ? <p>{error}</p>
            : <MovieList movies={results} />
        }
      </div>
    )
  }
}

export default Home