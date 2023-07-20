import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { Jumbotron } from './migration'
import PropTypes from 'prop-types'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import { useColorChange } from '../../hooks/useColorChange'

const Top = React.forwardRef(({ title, message }, ref) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const backgroundColor = useColorChange()

  console.log(backgroundColor)

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      <Jumbotron
        fluid
        id="home"
        className="title bg-transparent bgstyle text-light d-flex align-content-center align-items-center flex-wrap m-0"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="800"
      >
        <Image
          src="home.jpg"
          alt="music"
          className="music"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="800"
        />
        <div
          style={{ backgroundColor: backgroundColor }}
          className="overlay"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="800"
        ></div>
        <Container className="text-container">
          <h1
            ref={ref}
            className="top-font-style"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            {title}
          </h1>
          {isMobile ? (
            <div
              className="lead sub-font-container"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="800"
            >
              <p className="sub-font-style">音楽嗜好を可視化し、音楽を通して</p>
              <p className="sub-font-style">身近な人と繋がれる音楽SNS</p>
            </div>
          ) : (
            <div
              className="lead sub-font-style"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="800"
            >
              {message}
            </div>
          )}
        </Container>
        <Container className="btn-container">
          <Link
            className="btn btn-set"
            to="/"
            role="button"
            aria-label="Get Started"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            ダウンロード
          </Link>
        </Container>
      </Jumbotron>
      <div className="arrow-container">
        <a href="#about" className="arrow-bellow">
          <i className="fa fa-angle-double-down"></i>
        </a>
      </div>
      {/* <div className="arrow-underline"></div> */}
    </>
  )
})

Top.propTypes = {
  gradient: Jumbotron.propTypes.style,
  title: Jumbotron.propTypes.children,
  message: Jumbotron.propTypes.children,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
}

Top.displayName = 'MainBody'

export default Top
