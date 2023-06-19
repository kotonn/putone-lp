import React from 'react'
import PropTypes from 'prop-types'
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
        <div className="footer-mail">
          <img src="envelope.png" className="envelope" alt="mail" />
          <p className="footer-text lead">info@putone.jp</p>
        </div>
        <div className="footer-mail">
          <img src="Instagram.png" className="instagram" alt="insta" />
          <p className="footer-text lead">@putone</p>
        </div>
        <p className="footer-auth">© 2023 PuTone All right reserved.</p>
      </div>
    </Jumbotron>
  )
}

Footer.propTypes = {
  gradient: PropTypes.string.isRequired,
}

export default Footer
