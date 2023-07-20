import React, { useState, useEffect } from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import useResizeObserver from '../hooks/useResizeObserver'
import { NavLink } from './home/migration'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const navbarMenuRef = React.useRef()
  const navbarDimensions = useResizeObserver(navbarMenuRef)
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useScrollPosition(
    ({ currPos }) => {
      if (!navbarDimensions || !ref.current) return
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false)
      setScrollPosition(currPos.y)
    },
    [navBottom]
  )

  useEffect(() => {
    if (!navbarDimensions || !ref.current) return
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true)
  }, [navBottom, navbarDimensions, ref, scrollPosition])

  return (
    <>
      <nav
        ref={navbarMenuRef}
        className={`fixed-nav  ${
          !isTop ? 'navbar-transparent ' : 'navbar-transparent '
        }`}
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="800"
      >
        <div className="toggler" onClick={toggleMenu}>
          <div className="humberger-menu">
            <div className="blob-effect">
              <span></span>
              <span></span>
              <div className="div-container">
                {!isOpen ? (
                  <FontAwesomeIcon icon={faBars} size="lg" />
                ) : (
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                )}
              </div>
            </div>
          </div>
          {isOpen && (
            <div
              className="fullscreen-menu"
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="100"
            >
              <ul className="navbar-nav">
                <li className="nav-item lead">
                  <NavLink href={process.env.PUBLIC_URL + '/#home'}>
                    <span>ホーム</span>
                  </NavLink>
                </li>
                <li className="nav-item lead">
                  <NavLink href={process.env.PUBLIC_URL + '/#function'}>
                    <span>機能</span>
                  </NavLink>
                </li>
                <li className="nav-item lead">
                  <NavLink href={process.env.PUBLIC_URL + '/#contact'}>
                    <span>お問い合わせ</span>
                  </NavLink>
                </li>

                <li className="nav-item lead">
                  <NavLink href={process.env.PUBLIC_URL + '/#sns'}>
                    <span>SNS</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation
