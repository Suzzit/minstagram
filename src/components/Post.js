import React, { useState, useEffect } from 'react'
import './Post.css'
import Fetchposts from './Fetchposts'
import axios from 'axios'

function Posts() {
  return (
    <div className='post-section-container'>
      <Fetchposts />
    </div>
  )
}

export default Posts