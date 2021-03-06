import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {ButtonBackToHome} from '../../Commons'
import DontFound from '../../image-not-found.png'

// const API_KEY = 'e2a13753'
const API_KEY_DOS = 'c350d0d39ba6d9df0e2663698d7493d9'

class Detail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movie: {},
      cast: {}
    }
  }
  componentDidMount () {
    const {id} = this.props.match.params
    this.getMovie(id)
    this.getCast(id)
  }

  getMovie = (id) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY_DOS}&language=en-US`)
    .then(res => {
      this.setState({movie: res.data})
    })
    .catch(error => {
      console.log(error)
    })
  }

  getCast = (id) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY_DOS}`)
    .then(res => {
      this.setState({cast: res.data})
    })
    .catch(error => {
      console.log(error)
    })
  }

  goToHome = () => {
    window.location.href = '/'
  }

  render () {
    const {title, poster_path, vote_average, overview, genres} = this.state.movie
    console.log(this.state.cast)
    const {cast} = this.state.cast
    return (
      <div className='detail-movie'>
        <div className='back-container'>
          <ButtonBackToHome handleClick={this.goToHome} />
        </div>
        <div className='movie-info'>
          <h1 className="title">{title}</h1>
          {
            poster_path === null
            ? <img src={DontFound} alt={`${title} poster`} />
            : <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={`${title} poster`} />
          }
          {
            cast
            ? cast.slice(0,5).map(item => <span>{item.name}</span>)
            : null
          }
          <p><strong>Score:</strong> {vote_average}</p>
          <p><strong>Synopsis:</strong> {overview}</p>
        </div>
      </div>
    )
  }
}

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url:PropTypes.string
  })
}

export default Detail