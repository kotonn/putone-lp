import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import { Jumbotron } from './migration'
import PropTypes from 'prop-types'

export const ShowData = ({ gradient }) => {
  return (
    <>
      <Jumbotron
        fluid
        id="usage"
        style={{
          background: `linear-gradient(${gradient})`,
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'row',
          minHeight: '100vh',
          overflow: 'auto',
        }}
      >
        <div className="data-container">
          <div className="data-text">
            <h2 className="data-number">
              <CountUp end={450} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h2>
            <p className="data-theme">ユーザー数</p>
          </div>
          <div className="data-text">
            <h2 className="data-number">
              <CountUp end={500} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h2>
            <p className="data-theme">登録数</p>
          </div>
          <div className="data-text">
            <h2 className="data-number">
              <CountUp end={900} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h2>
            <p className="data-theme">ダウンロード数</p>
          </div>
        </div>
      </Jumbotron>
    </>
  )
}

ShowData.propTypes = {
  gradient: PropTypes.string.isRequired,
}
