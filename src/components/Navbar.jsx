import React, { useState, useEffect } from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import useResizeObserver from '../hooks/useResizeObserver'
import { NavLink } from './home/migration'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar'
import { useColorChange } from '../hooks/useColorChange'
import { Link } from 'react-router-dom'

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const navbarMenuRef = React.useRef()
  const navbarDimensions = useResizeObserver(navbarMenuRef)
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0
  const color = useColorChange()

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

  useEffect(() => {
    if (navbarDimensions) {
      setIsMobile(navbarDimensions.width < 768)
    }
  }, [navbarDimensions])

  return (
    <>
      <nav
        ref={navbarMenuRef}
        className={`fixed-nav  ${
          !isTop ? 'navbar-transparent ' : 'navbar-transparent '
        }`}
      >
        {isMobile && (
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
                    <NavLink href={process.env.PUBLIC_URL + '/#usagefirst'}>
                      <span>使い方</span>
                    </NavLink>
                  </li>
                  <li className="nav-item lead">
                    <NavLink href={process.env.PUBLIC_URL + '/#sns'}>
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
        )}
        {!isMobile && (
          <>
            <Sidebar />
            <div
              className="header-style"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <div className="navbar-brand lead">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <i
                    className={`fab fa-instagram socialicons`}
                    style={{ color: color }}
                  ></i>
                </a>
              </div>
              <NavLink href={process.env.PUBLIC_URL + '/#home'}>
                <span className="top-text-p" style={{ color: color }}>
                  P
                </span>
              </NavLink>
              <Link
                className="btn btn-set"
                to="/subscription"
                role="button"
                aria-label="Get Started"
              >
                Get Started
              </Link>
            </div>
            <div>
              <ul className="navbar-nav">
                <li className="nav-item lead">
                  <NavLink href={process.env.PUBLIC_URL + '/#usagefirst'}>
                    <span style={{ color: color }}>1</span>
                  </NavLink>
                </li>
                <li className="nav-item lead">
                  <NavLink href={process.env.PUBLIC_URL + '/#usagesecond'}>
                    <span style={{ color: color }}>2</span>
                  </NavLink>
                </li>

                <li className="nav-item lead">
                  <NavLink href={process.env.PUBLIC_URL + '/#usagethird'}>
                    <span style={{ color: color }}>3</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
    </>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation
