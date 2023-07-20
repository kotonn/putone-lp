import React from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../utils/firebase'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

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
    <>
      <section
        id="contact"
        className="contact-guide"
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="300"
      >
        <div className="contact-guide__container">
          <div className="top-message__heading">
            <h2 className="page-heading">
              <div className="page-heading__content--center">
                <div className="page-heading__text-main">お問い合わせ</div>
                <div className="page-heading__text-sub">
                  当アプリについてのご質問やご相談などお気軽にお問い合わせください。
                </div>
              </div>
            </h2>
          </div>
          <div className="contact-guide__list">
            <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
              <input
                {...register('user_name', { required: true })}
                className="form-control"
                id="name"
                name="user_name"
                placeholder="Name"
                type="text"
              />
              {errors.name && <span>This field is required</span>}
              <input
                {...register('user_email', { required: true })}
                className="form-control"
                id="email"
                name="user_email"
                placeholder="Email"
                type="email"
              />
              {errors.email && <span>This field is required</span>}
              <textarea
                {...register('message', { required: true })}
                className="form-control"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
              ></textarea>
              {errors.message && <span>This field is required</span>}
              <input type="submit" value="送る" className="btn ac_btn" />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
