import React from 'react'

const API_KEY = 'e2a13753'

class SearchForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputMovie: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      inputMovie: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {inputMovie} = this.state

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(results => {
        const {Search, totalResults} = results
        console.log(Search)
        this.props.onResults(Search)
      })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input className="input"
              onChange={this.handleChange}
              placeholder="Movie search..."
              type="text" />
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default SearchForm