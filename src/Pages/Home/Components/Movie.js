import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import DontFound from '../../../image-not-found.png'

class Movie extends React.Component {
  render () {
    const {id, title, year, poster} = this.props
    return (
      <Link to={`/detail/${id}`} className="card">
        <div className="card-image">
          <figure className="image is-4by5">
            {
              poster === null
              ? <img src={DontFound} alt={`${title} poster`} />
              : <img src={`https://image.tmdb.org/t/p/original${poster}`} alt={`${title} poster`} />
            }
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{year}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default Movie

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  year: PropTypes.string,
  poster: PropTypes.string
}
