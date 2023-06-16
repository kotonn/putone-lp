import React, { useState, useEffect } from 'react'
import { Jumbotron } from './migration'
import PropTypes from 'prop-types'

const UsageFirst = ({ gradient }) => {
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
          {/* <div className="usage-heading-nav">
            <h1>どんな使い方ができるの？</h1>
          </div> */}
          <div className="usage-container" id="usagefirst">
            <img
              src="connectSpotify.png"
              alt="spotifypicture"
              className="usage-pic"
            />
          </div>
          <div className="usage-text-container">
            <h2 className="usage-heading mb-5">1. Spotifyと連携する</h2>
            <p className="usage-text lead">
              SpotifyAPIを通じて、様々な音楽を共有することができるようになります。
            </p>
          </div>
        </>
      ) : (
        <div className="usage-container" id="usagefirst">
          <div className="usage-text-container">
            <h2 className="usage-heading mb-5">1. Spotifyと連携する</h2>
            <p className="usage-text lead">
              SpotifyAPIを通じて、様々な音楽を共有することができるようになります。
            </p>
          </div>
          <img
            src="connectSpotify.png"
            alt="homescreenpicture"
            className="usage-pic"
          />
        </div>
      )}
    </Jumbotron>
  )
}

UsageFirst.propTypes = {
  gradient: PropTypes.string.isRequired,
}

export default UsageFirst