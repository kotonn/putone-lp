import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Jumbotron } from './home/migration'

const Footer = ({ gradient }) => {
  return (
    <Jumbotron
      fluid
      style={{
        background: `linear-gradient(${gradient})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
        overflow: 'auto',
      }}
    >
      <div className="footer-text-container" id="sns">
        <h1 className="footer-heading mb-5">PuTone</h1>
        <p className="footer-explain mb-5">
          当アプリについてのご質問やご相談など
          <br />
          お気軽にお問い合わせください。
        </p>

        <Link
          className="btn footer-button"
          to="/contact"
          role="button"
          aria-label="お問い合わせ"
        >
          お問い合わせ
        </Link>
        <p className="footer-auth">© 2023 PuTone All right reserved.</p>
      </div>
    </Jumbotron>
  )
}

Footer.propTypes = {
  gradient: PropTypes.string.isRequired,
}

export default Footer
