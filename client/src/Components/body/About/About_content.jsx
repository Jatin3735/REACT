import React from 'react'

const About_content = () => {
  return (
    <div className='about-content'>
      <div className="about-image">
        <img src="./public/about-me.png" alt="" />
      </div>
      <div className="about-me">
        <div className="about-me-detail">
        <span className='about-me-name'>About Me</span>
        <h2 className='ui'>UI/UX Designer & Web Developer</h2>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        </div>
      </div>
    </div>
  )
}

export default About_content
