import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({handleChange, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input className="input"
            onChange={handleChange}
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

export default SearchForm

SearchForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}