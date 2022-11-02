import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import Feed from './Feed'

function Home() {

  return (
    <div className='home-container'>
      <Navbar />
      <div className='hero-section'>
        <Feed />
      </div>
    </div>
  )
}

export default Home