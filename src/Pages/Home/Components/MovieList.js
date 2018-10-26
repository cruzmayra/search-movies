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
            return <div className='MovieList-item' key={movie.id}>
              <Movie
              id={movie.id}
              title={movie.title}
              year={movie.release_date}
              poster={movie.poster_path} />
            </div>
          })
        }
      </div>
    )
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
}

export default MovieList