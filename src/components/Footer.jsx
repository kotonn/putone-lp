import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer
      id="sns"
      className="footer"
      data-aos="fade-up"
      data-aos-duration="300"
      data-aos-delay="300"
    >
      <div className="stick_follow_icon">
        <ul>
          <li>
            <a
              href="https://instagram.com/putone_official"
              style={{ color: 'antiquewhite' }}
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
        <p className="follow_sns">SNS</p>
      </div>
      <div className="footer__copy">© 2023 PuTone All right reserved.</div>
    </footer>
  )
}

export default Footer
