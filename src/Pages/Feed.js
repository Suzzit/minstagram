import React from 'react'
import Post from '../components/Post'
import './Feed.css'
import CreatePost from './CreatePost'

function Feed() {
  return (
    <div className='feed-container'>
      <div className='create-post-div'>
          <CreatePost />
      </div>
      <div className='posts-list'>
          <Post />
      </div>
    </div>
  )
}

export default Feed