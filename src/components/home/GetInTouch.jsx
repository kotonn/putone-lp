import React from 'react'
import PropTypes from 'prop-types'

const GetInTouch = ({ heading, message, email, icons }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message},{' '}
        <a className="text-decoration-none" href={`mailto:${email}`}>
          {email}
        </a>
        .
      </p>
      <div className="d-flex justify-content-center">
        {icons.map((icon, index) => (
          <a
            key={`social-icon-${index}`}
            target="_blank"
            rel="noopener noreferrer"
            href={icon.url}
            aria-label={`My ${icon.image.split('-')[1]}`}
          >
            <i className={`fab ${icon.image}  fa-3x socialicons`} />
          </a>
        ))}
      </div>
    </>
  )
}

GetInTouch.propTypes = {
  heading: PropTypes.string,
  message: PropTypes.string,
  email: PropTypes.string,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default GetInTouch
