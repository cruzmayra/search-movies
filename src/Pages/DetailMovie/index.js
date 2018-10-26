import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {ButtonBackToHome} from '../../Commons'

const API_KEY = 'e2a13753'

class Detail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movie: {}
    }
  }
  componentDidMount () {
    const {id} = this.props.match.params
    this.fetchMovie(id)
  }

  fetchMovie = (id) => {
    axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    .then(res => {
      this.setState({movie: res.data})
    })
    .catch(error => {
      console.log(error)
    })
  }

  render () {
    const {Title, Poster, Actors, Metascore, Plot} = this.state.movie
    console.log(this.state.movie)
    return (
      <div className='detail-movie'>
        <div className='back-container'>
          <ButtonBackToHome />
        </div>
        <div className='movie-info'>
          <h1 className="title">{Title}</h1>
          <img src={Poster} alt={`${Title} poster`}/>
          <h3><strong>Actors:</strong> {Actors}</h3>
          <p><strong>Score:</strong> {Metascore}</p>
          <p><strong>Synopsis:</strong> {Plot}</p>
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