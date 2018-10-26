import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({handleChange, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field is-grouped">
        <p className="control is-expanded">
          <input className="input " type="text" onChange={handleChange} placeholder="Find a movie :)" />
        </p>
        <p className="control">
          <button className="button is-info">
            Search
          </button>
        </p>
      </div>
    </form>
  )
}

export default SearchForm

SearchForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}