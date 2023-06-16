import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Usage = () => {
  // Add your own data here.
  const resumeExperience = [
    {
      years: '2020 - 2023',
      title: 'Software Engineer',
      company: 'Company A',

      mainTech: ['1'],
    },
  ]

  const work = resumeExperience.map((work, i) => {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{
          background: '#ffb800',
          color: '#fff',
          textAlign: 'center',
        }}
        icon={<i className="fab fa-angular experience-icon"></i>}
        key={i}
      >
        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: 'left' }}
        >
          {work.title}
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: 'left' }}
        >
          {work.company}
        </h4>
      </VerticalTimelineElement>
    )
  })

  return (
    <section id="resume" className="usage-container">
      <h1 className="section-title">使い方</h1>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>{work}</VerticalTimeline>
      </div>
    </section>
  )
}

export default Usage
