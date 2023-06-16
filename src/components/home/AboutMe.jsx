import React, { useState, useEffect } from 'react'
import { Jumbotron } from './migration'
import PropTypes from 'prop-types'

const AboutMe = ({ gradient }) => {
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
      {!isMobile ? (
        <>
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
        </>
      ) : (
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
      )}
    </Jumbotron>
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
