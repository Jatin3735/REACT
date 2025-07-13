import React from 'react'

const Content_item = () => {
  return (
    <div className='content_item'>
      <h2>Crafting Digital Experience With Passion</h2> <br />
    <p>Transforming ideas into elegant solutions through creative design and innovative development</p>  <br />
    <div className="btns">
    <a href="#" className='btn_fill'>View My Work</a>
    <a href="#" className='btn_outline'>Lets Connect</a> <br />
    </div>
    <div className="rates">
      <div className="stat-item">
        <span className='stat-number'>5+</span> 
        <span className='stat-label'>Years Experience</span>
      </div>
      <div className="stat-item">
      <span className='stat-number'>100+</span> 
      <span className='stat-label'>Projects Completed</span>
      </div>
      <div className="stat-item">
      <span className='stat-number'>50+</span> 
      <span className='stat-label'>Happy Clients</span>
      </div>
    </div>

    </div>
  )
}

export default Content_item
