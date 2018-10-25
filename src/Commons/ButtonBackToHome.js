import React from 'react'
import {Link} from 'react-router-dom'

const ButtonBackToHome = () => {
  return (
    <button className="button is-primary">
    <Link to='/'>
      Regresar al Home
    </Link>
    </button>
  )
}

export {ButtonBackToHome}