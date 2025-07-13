import React from 'react'
import Content_item from './Content_item'
import Content_image from './Content_image'

const Home = () => {
  return (
    <div className='content' id='content'>
      <Content_item /> 
      <Content_image />
    </div>
  )
}

export default Home
