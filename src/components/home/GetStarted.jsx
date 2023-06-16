import React from 'react'
import { auth } from '../../utils/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Jumbotron } from './migration'
import { NavLink } from './migration'

const GetStarted = ({ gradient }) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm()

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigate('/created')
      })
      .catch((error) => {
        console.log(error.code)
        switch (error.code) {
          case 'auth/invalid-email':
            setError('email', {
              type: 'manual',
              message: '正しいメールアドレスの形式で入力してください。',
            })
            break
          case 'auth/weak-password':
            setError('password', {
              type: 'manual',
              message: 'パスワードは6文字以上を設定する必要があります。',
            })
            break
          case 'auth/email-already-in-use':
            setError('email', {
              type: 'manual',
              message: 'そのメールアドレスは登録済みです。',
            })
            break
          default:
            setError('email', {
              type: 'manual',
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
      <NavLink href={process.env.PUBLIC_URL + '/#home'}>
        <span className="top-text-p">P</span>
      </NavLink>
      <div className="signup-container">
        <div className="top-container">
          <h1 className="main-typography">Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="form-container">
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
                Sign Up
              </button>
            </div>
          </form>
          <p className="guide-typography">
            すでにアカウントをお持ちの方は
            <button
              onClick={() => navigate('/login')}
              className="guide-to-login-button"
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
          />
        </div>
      </div>
    </Jumbotron>
  )
}

GetStarted.propTypes = {
  gradient: Jumbotron.propTypes.style,
}

export default GetStarted
