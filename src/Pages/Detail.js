import React from 'react'
import PropTypes from 'prop-types'

const API_KEY = 'e2a13753'

class Detail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movie: {}
    }
  }
  componentDidMount () {
    const {id} = this.props
    this.fetchMovie(id)
  }

  fetchMovie = (id) => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        this.setState({movie})
      })
  }

  goBack = () => {
    window.history.back()
  }

  render () {
    const {Title, Poster, Actors, Metascore, Plot} = this.state.movie
    return (
      <div>
        <button onClick={this.goBack}>Regresar</button>
        <h1>{Title}</h1>
        <img src={Poster} alt={`${Title} poster`}/>
        <h3>{Actors}</h3>
        <p>Score: <span>{Metascore}</span></p>
        <p>{Plot}</p>
      </div>
    )
  }
}

Detail.propTypes = {
  id: PropTypes.string
}

export default Detail