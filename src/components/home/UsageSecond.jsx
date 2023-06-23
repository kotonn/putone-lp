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
            maxHeight: '100vh',
            overflow: 'auto',
          }}
        >
          <div className="usage-second-container" id="usagesecond">
            <img
              src="storyScreen.png"
              alt="storypicture"
              className="usage-second-pic"
            />
          </div>
          <div className="usage-second-text-container">
            <div className="usage-heading-nav">
              <h2 className="usage-heading mb-5">2. </h2>
              <h2 className="usage-heading mb-5">
                ストーリー機能で、 好きな音楽を存分に共有しよう
              </h2>
            </div>
            <p className="usage-second-text lead">
              自分の『好き』を思うがままに共有しましょう。
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
            minHeight: '130vh',
            maxHeight: '130vh',
            overflow: 'auto',
            marginTop: '5vh',
          }}
        >
          <div className="usage-second-container" id="usagesecond">
            <div className="usage-second-text-container">
              <div className="usage-heading-nav">
                <h2 className="usage-heading mb-5">2. </h2>
                <h2 className="usage-heading mb-5">
                  ストーリー機能で、 <br />
                  好きな音楽を存分に共有しよう
                </h2>
              </div>
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
        </Jumbotron>
      )}
    </>
  )
}

UsageSecond.propTypes = {
  gradient: PropTypes.string.isRequired,
}

export default UsageSecond
