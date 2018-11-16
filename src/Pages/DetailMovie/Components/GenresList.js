import React from 'react'

class GenresList extends React.Component {
  render () {
    const {genres} = this.props
    console.log(genres)
    return (
      <div className="tags">
        {
          genres
            ? genres.map(genre => <span className="tag is-rounded is-dark" key={genre.name}>{genre.name}</span>)
            : null
        }
      </div>
    )
  }
}

export default GenresList