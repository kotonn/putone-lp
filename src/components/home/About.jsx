import React from 'react'
import PropTypes from 'prop-types'

export const About = () => {
  return (
    <>
      <section
        id="about"
        className="top-message"
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="300"
      >
        <div className="top-message__container">
          <div className="top-message__heading">
            <h2 className="page-heading">
              <div className="page-heading__content--center">
                <div className="page-heading__text-main">
                  音楽SNS『PuTone』とは
                </div>
                <div className="page-heading__text-sub">
                  さあ、音楽の聴き方を変革しよう。
                </div>
              </div>
            </h2>
          </div>
          <div className="top-message__content">
            <div className="top-message__text">
              {' '}
              ウォークマン、iPod、そして現在は音楽ストリーミングサービスで、音楽を一人だけで聞けるようになった。しかし、その便利さの一方で、人と音楽を分かち合う、好きを語り合う、そんな体験の場がなくなってしまった。
            </div>
            <div className="top-message__text">
              {' '}
              『PuTone』では、そんな失われてしまった、音楽をみんなで聴くという体験の場を創造するために、一人一人の音楽嗜好を可視化し、音楽を通して身の回りの人と繋がれる。そして、繋がった人とは、お互いに好きな音楽を交換し合い、自分の好きを思い切り共感し合える場を作る。
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

About.propTypes = {
  gradient: PropTypes.string.isRequired,
}
