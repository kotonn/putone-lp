import React from 'react'
import Nav from 'react-bootstrap/Nav'
import PropTypes from 'prop-types'

export const Jumbotron = (props) => {
  const bgStyle = props.style ?? { backgroundColor: '#000' }
  return (
    <div id={props.id} className={`${props.className}`} style={bgStyle}>
      <div className="container py-5">{props.children}</div>
    </div>
  )
}

Jumbotron.propTypes = {
  style: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export const NavLink = (props) => {
  return (
    <Nav.Link href={props.href} target={props.target} rel={props.rel}>
      <span className={`nav-item lead ${props.className}`}>
        {props.children}
      </span>
    </Nav.Link>
  )
}

NavLink.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}
