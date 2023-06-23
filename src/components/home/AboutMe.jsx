import React, { useState, useEffect } from 'react'
import { Jumbotron } from './migration'
import PropTypes from 'prop-types'

const AboutMe = ({ gradient }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth <= 1024
  )
  const [isLap, setIsLap] = useState(
    window.innerWidth >= 1025 && window.innerWidth <= 1366
  )

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768)
    setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024)
    setIsLap(window.innerWidth >= 1025 && window.innerWidth <= 1366)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {!isMobile ? (
        <Jumbotron
          fluid
          style={{
            background: `linear-gradient(${gradient})`,
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'row',
            minHeight: isTablet ? '110vh' : isLap ? '200vh' : '175vh',
            overflow: 'auto',
          }}
        >
          <div className="about-container" id="about">
            <div className="about-text-container">
              <h1 className="about-heading-top">『PuTone』って何？</h1>
              <h2 className="about-heading mb-5">
                次世代の音楽視聴エコシステムを創造するアプリです。
              </h2>
              <p className="about-text lead">
                ウォークマン、音楽ストリーミングサービスで、イヤホン、ヘッドホンで1人だけで聞けるようになりました。
                その一方で、人と音楽を分かち合う、好きを語り合う、そんな体験の場がなくなってしまいました。
                <br />
                それを取り戻すため、今こそ、一人から共同体視聴への転換期であると考え、このアプリを作りました。
              </p>
            </div>
            <div className="video-container">
              <video
                src="promotion.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="about-video"
              />
            </div>
          </div>
        </Jumbotron>
      ) : (
        <Jumbotron
          fluid
          style={{
            background: `linear-gradient(${gradient})`,
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'row',
            minHeight: '125vh',
            overflow: 'auto',
          }}
        >
          <div className="about-container" id="about">
            <div className="about-text-container">
              <h1 className="about-heading-top">『PuTone』って何？</h1>
              <h2 className="about-heading mb-5">
                次世代の音楽視聴エコシステムを創造するアプリです。
              </h2>
              <p className="about-text lead">
                ウォークマン、音楽ストリーミングサービスで、イヤホン、ヘッドホンで1人だけで聞けるようになりました。
                その一方で、人と音楽を分かち合う、好きを語り合う、そんな体験の場がなくなってしまいました。
                <br />
                それを取り戻すため、今こそ、一人から共同体視聴への転換期であると考え、このアプリを作りました。
              </p>
            </div>
            <div className="video-container">
              <video
                src="promotion.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="about-video"
              />
            </div>
          </div>
        </Jumbotron>
      )}
    </>
  )
}

AboutMe.propTypes = {
  heading: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imgSize: PropTypes.number.isRequired,
  resume: PropTypes.string.isRequired,
  gradient: PropTypes.string.isRequired,
}

export default AboutMe
