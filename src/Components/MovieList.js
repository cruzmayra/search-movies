import React from 'react'
import PropTypes from 'prop-types'

// Components
import Movie from './Movie';

class MovieList extends React.Component {
  render () {
    const {movies} = this.props

    return (
      <div className='MovieList'>
        {
          movies.map(movie => {
            return <div className='MovieList-item' key={movie.imdbID}>
              <Movie 
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster} />
            </div>
          })
        }
      </div>
    )
  }
}

MovieList.propTypes = {
  movies: PropTypes.array
}

export default MovieList