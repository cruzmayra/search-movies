import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import DontFound from '../image-not-found.png'

class Movie extends React.Component {
  render () {
    const {id, title, year, poster} = this.props
    return (
      <Link to={`/detail/${id}`} className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            {
              poster === 'N/A'
              ? <img src={DontFound} alt='poster not found' />
              : <img src={poster} alt={`${title} poster`} />
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
  id: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  poster: PropTypes.string
}
