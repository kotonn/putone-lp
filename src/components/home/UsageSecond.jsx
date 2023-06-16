import React, { useState, useEffect } from 'react'
import { Jumbotron } from './migration'
import PropTypes from 'prop-types'

const UsageSecond = ({ gradient }) => {
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
          <div className="usage-second-container" id="usagesecond">
            <img
              src="storyScreen.png"
              alt="storypicture"
              className="usage-second-pic"
            />
          </div>
          <div className="usage-second-text-container">
            <h2 className="usage-second-heading mb-5">
              2. ストーリー機能で、 好きな音楽を存分に共有しよう
            </h2>
            <p className="usage-second-text lead">
              自分の『好き』を思うがままに共有しましょう。
            </p>
          </div>
        </>
      ) : (
        <div className="usage-second-container" id="usagesecond">
          <div className="usage-second-text-container">
            <h2 className="usage-second-heading mb-5">
              2. ストーリー機能で、 好きな音楽を存分に共有しよう
            </h2>
            <p className="usage-second-text lead">
              自分の『好き』を思うがままに共有しましょう。
            </p>
          </div>
          <img
            src="storyScreen.png"
            alt="storypicture"
            className="usage-second-pic"
          />
        </div>
      )}
    </Jumbotron>
  )
}

UsageSecond.propTypes = {
  gradient: PropTypes.string.isRequired,
}

export default UsageSecond
