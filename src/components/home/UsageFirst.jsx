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
    <>
      {!isMobile ? (
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
          <div className="usage-container" id="usagefirst">
            <img
              src="connectSpotify.png"
              alt="spotifypicture"
              className="usage-pic"
            />
          </div>
          <div className="usage-text-container">
            <div className="usage-heading-nav">
              <h2 className="usage-heading mb-5">1. </h2>
              <h2 className="usage-heading mb-5">Spotifyと連携する</h2>
            </div>
            <p className="usage-text lead">
              SpotifyAPIを通じて、様々な音楽を共有することができるようになります。
            </p>
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
            minHeight: '150vh',
            overflow: 'auto',
          }}
        >
          {/* <div className="usage-explain" id="usagefirst">
            <p className="usage-explain-text"></p>
          </div> */}
          <div className="usage-container" id="usagefirst">
            <div className="usage-text-container">
              <div className="usage-heading-nav">
                <h2 className="usage-heading mb-5">1. </h2>
                <h2 className="usage-heading mb-5">Spotifyと連携する</h2>
              </div>
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
        </Jumbotron>
      )}
    </>
  )
}

UsageFirst.propTypes = {
  gradient: PropTypes.string.isRequired,
}

export default UsageFirst
