import React from 'react'
import PropTypes from 'prop-types'

const Footer = () => {
  return (
    <div className="footer-container">
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
    </div>
  )
}

Footer.propTypes = {
  gradient: PropTypes.string.isRequired,
}

export default Footer
