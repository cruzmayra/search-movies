import React from 'react'
import SearchForm from './Components/SearchForm'
import MovieList from './Components/MovieList'
import axios from 'axios'

// const API_KEY = 'e2a13753'
const API_KEY_DOS = 'c350d0d39ba6d9df0e2663698d7493d9'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputMovie: '',
      results: [],
      error: ''
    }
  }

  componentDidMount () {
    this.getNewMovies()
  }

  getNewMovies () {
    let todayDate = new Date();
    let today = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();
    let oneMonthAgo = (todayDate.getMonth() === 0 ? todayDate.getFullYear() - 1 : todayDate.getFullYear()) + '-' + (todayDate.getMonth() === 0 ? todayDate.getMonth() + 12 : todayDate.getMonth()) + '-' + todayDate.getDate();

    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_DOS}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${oneMonthAgo}&primary_release_date.lte=${today}`)
    .then(res => {
      const {results} = res.data
      this.setState({results})
    })
    .catch(error => console.log(error))
  }

  handleChange = (e) => {
    this.setState({
      inputMovie: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {inputMovie} = this.state

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY_DOS}&query=${inputMovie}`)
    .then(res => {
      const {results} = res.data
      this.setState({results})
    })
    .catch(error => console.log(error))
  }

  render () {
    const {results, error} = this.state
    return (
      <div>
        <div className='SearchForm-wrapper'>
          <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
        {
          error !== ''
            ? <p>{error}</p>
            : <div>
              <h3 className="subtitle is-3">Recientes</h3>
              <MovieList movies={results} />
            </div>
        }
      </div>
    )
  }
}

export default Home