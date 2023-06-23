import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { db } from '../../utils/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { Jumbotron } from './migration'
import { NavLink } from './migration'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Contact = ({ gradient }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data, e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        async (result) => {
          console.log(result.text)
          try {
            const docRef = await addDoc(collection(db, 'contact'), data)
            console.log('Document written with ID: ', docRef.id)
            reset()
            window.alert('メール送信が完了しました')
          } catch (e) {
            console.error('Error adding document: ', e)
            window.alert('エラーが発生しました: ' + e.message)
          }
        },
        (error) => {
          console.log(error.text)
          window.alert('メール送信に失敗しました: ' + error.text)
        }
      )
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
      <h1
        className="main-typography-form"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
        id="contact"
      >
        Contact
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="contact-form-container"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <div className="contact-form-contents">
          <label className="contact-label">名前</label>
          <input
            {...register('user_name')}
            type="text"
            name="user_name"
            className="contact-input-container"
          />
        </div>
        <div className="contact-form-contents">
          <label className="contact-label">メールアドレス</label>
          <input
            {...register('user_email')}
            type="email"
            name="user_email"
            className="contact-input-container"
          />
        </div>
        <div className="contact-form-contents">
          <label className="contact-label">お問い合わせ内容</label>
          <textarea
            {...register('message')}
            name="message"
            className="contact-input-container-textarea"
          />
        </div>
        <input type="submit" value="送る" className="contact-button" />
      </form>
    </Jumbotron>
  )
}

Contact.propTypes = {
  gradient: Jumbotron.propTypes.style,
}

export default Contact
