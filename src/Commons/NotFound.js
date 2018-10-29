import React from 'react'
import {ButtonBackToHome} from './ButtonBackToHome'

const NotFound = () => {
  return (
    <div>
      <p className="title is-1">Error 404</p>
      <p className="subtitle is-3">Página no encontrada</p>
      <ButtonBackToHome handleClick={() => window.location.href = '/'} />
    </div>
  )
}

export {NotFound}