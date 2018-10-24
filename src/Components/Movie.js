import React from 'react'
import PropTypes from 'prop-types'

class Movie extends React.Component {
  render () {
    const {id, title, year, poster} = this.props
    return (
      <a href={`?id=${id}`} className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={poster} alt={`${title} poster`} />
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
      </a>
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