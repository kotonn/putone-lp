import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { Jumbotron } from './migration'
import PropTypes from 'prop-types'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

const MainBody = React.forwardRef(({ gradient, title, message }, ref) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

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
      {!isMobile && (
        <>
          <Jumbotron
            fluid
            id="home"
            style={{
              background: `linear-gradient(to bottom,${gradient})`,
              backgroundSize: 'cover',
            }}
            className="title bg-transparent bgstyle text-light vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
          >
            <Image
              src="demo.jpeg"
              alt="music"
              className="music"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            />
            <Container className="text-center text-container">
              <h1
                ref={ref}
                className="top-font-style"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                {title}
              </h1>

              <div
                className="lead typist"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                {message}
              </div>
            </Container>
          </Jumbotron>
          <div>
            <a href="#about" className="arrow-bellow">
              <i className="fa fa-angle-double-down"></i>
            </a>
          </div>
        </>
      )}
      {isMobile && (
        <>
          <Jumbotron
            fluid
            id="home"
            style={{
              background: '#000',
              backgroundSize: 'cover',
            }}
            className="title bg-transparent bgstyle text-light d-flex align-content-center align-items-center flex-wrap m-0"
          >
            <Image
              src="demo.jpeg"
              alt="music"
              className="music"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            />
            <Container className="text-center text-container">
              <h1
                ref={ref}
                className="top-font-style"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                {title}
              </h1>

              <div
                className="lead typist"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                {message}
              </div>

              <Link
                className="btn btn-set"
                to="/subscription"
                role="button"
                aria-label="Get Started"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                Get Started
              </Link>
            </Container>
          </Jumbotron>
          <div>
            <a href="#about" className="arrow-bellow">
              <i className="fa fa-angle-double-down"></i>
            </a>
          </div>
        </>
      )}
    </>
  )
})

MainBody.propTypes = {
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

MainBody.displayName = 'MainBody'

export default MainBody
