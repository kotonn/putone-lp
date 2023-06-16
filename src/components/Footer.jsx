import React from 'react'
import PropTypes from 'prop-types'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-text-container" id="sns">
        <h1 className="footer-heading mb-5">PuTone</h1>
        <div className="footer-mail">
          <i
            className="fa fa-envelope"
            aria-hidden="true"
            style={{ fontSize: '3rem' }}
          ></i>
          <p className="footer-text lead">info@putone.jp</p>
        </div>
        <p className="footer-auth">© 2023 PuTone All right reserved.</p>
      </div>
    </div>
  )
}

Footer.propTypes = {
  gradient: PropTypes.string.isRequired,
}

export default Footer
