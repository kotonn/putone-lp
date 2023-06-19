import React, { useState, useEffect } from 'react'
import { Jumbotron } from './migration'
import PropTypes from 'prop-types'

const UsageThird = ({ gradient }) => {
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
          <div className="usage-third-container" id="usagethird">
            <img
              src="friendScreen.png"
              alt="friendpicture"
              className="usage-third-pic"
            />
          </div>
          <div className="usage-third-text-container">
            <h2 className="usage-third-heading mb-5">
              3. フォロー機能 <br />
              コミュニティ参加機能
            </h2>
            <p className="usage-third-text lead">
              様々な音楽に触れ、 自分の音楽の幅を、感性を広げましょう。
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
          <div className="usage-third-container" id="usagethird">
            <div className="usage-third-text-container">
              <div className="usage-heading-nav">
                <h2 className="usage-heading mb-5">3. </h2>
                <h2 className="usage-heading mb-5">
                  フォロー機能 <br />
                  コミュニティ参加機能
                </h2>
              </div>
              <p className="usage-third-text lead">
                様々な音楽に触れ、 自分の音楽の幅を、感性を広げましょう。
              </p>
            </div>
            <img
              src="friendScreen.png"
              alt="friendpicture"
              className="usage-third-pic"
            />
          </div>
        </Jumbotron>
      )}
    </>
  )
}

UsageThird.propTypes = {
  gradient: PropTypes.string.isRequired,
}

export default UsageThird
