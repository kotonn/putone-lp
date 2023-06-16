import React, { useState } from 'react'
import { auth } from '../../utils/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Jumbotron } from './migration'
import { NavLink } from './migration'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Login = ({ gradient }) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm()

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            setError('email', {
              message: '正しいメールアドレスの形式で入力してください。',
            })
            break
          case 'auth/weak-password':
            setError('password', {
              message: 'パスワードは6文字以上を設定する必要があります。',
            })
            break
          case 'auth/email-already-in-use':
            setError('email', { message: 'そのメールアドレスは登録済みです。' })
            break
          default:
            setError('email', {
              message: 'メールアドレスかパスワードに誤りがあります。',
            })
            break
        }
      })
  }

  return (
    <Jumbotron
      fluid
      id="home"
      style={{
        background: `linear-gradient(to bottom,${gradient})`,
        backgroundSize: 'cover',
      }}
      className="title bg-transparent bgstyle text-light vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
    >
      <div className="toggler" onClick={toggleMenu}>
        <div className="humberger-menu">
          <div className="blob-effect-getstarted">
            <span></span>
            <span></span>
            <div className="div-container" style={{ color: '#000' }}>
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
                <NavLink href={process.env.PUBLIC_URL + '/#usagesecond'}>
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
      <div className="signup-container">
        <div className="top-container">
          <h1
            className="main-typography"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            Login
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-container"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <div className="name-container">
              <label htmlFor="email" className="label-container">
                Email
              </label>
              <input
                {...register('email')}
                id="email"
                type="email"
                placeholder="example@putone.com"
                className="input-container"
              />
            </div>
            {errors.email && (
              <p className="error-typography">{errors.email.message}</p>
            )}
            <div className="name-container">
              <label htmlFor="password" className="label-container">
                Password
              </label>
              <input
                {...register('password')}
                id="password"
                type="password"
                placeholder="password"
                className="input-container"
              />
            </div>
            {errors.password && (
              <p className="error-typography">{errors.password.message}</p>
            )}
            <div className="signup-button-container">
              <button type="submit" className="signup-button">
                Login
              </button>
            </div>
          </form>
          <p
            className="guide-typography"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            アカウントをお持ちでない方は
            <button
              onClick={() => navigate('/subscription')}
              className="guide-to-login-button"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              こちら
            </button>
          </p>
        </div>
        {/* 動画を挿入 */}
        <div className="video-container">
          <video
            src="promotion.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="video"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          />
        </div>
      </div>
    </Jumbotron>
  )
}

Login.propTypes = {
  gradient: Jumbotron.propTypes.style,
}

export default Login
