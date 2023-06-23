import React from 'react'
import { Jumbotron } from './migration'
import PropTypes from 'prop-types'

const NavigateUsage = ({ gradient, message }) => {
  return (
    <>
      <Jumbotron
        fluid
        style={{
          background: `linear-gradient(${gradient})`,
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'row',
          minHeight: '20vh',
          overflow: 'auto',
          alignItems: 'center',
        }}
        id="usagefirst"
      >
        <div className="usage-explain">
          <p className="usage-explain-text">{message}</p>
        </div>
      </Jumbotron>
    </>
  )
}

NavigateUsage.propTypes = {
  gradient: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default NavigateUsage
