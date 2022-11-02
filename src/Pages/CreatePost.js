import React, { useState } from 'react'
import './Createpost.css'
import { setDoc, doc } from 'firebase/firestore'
import { collectionList } from '../firebase'

function CreatePost() {
    const [postHeading, setPostHeading] = useState("")
    const [postContent, setPostContent] = useState("")

    // const [postData, setPostData] = useState({})

    const createPost = (e) => {
        e.preventDefault()
        setDoc(doc(collectionList),
            {
                posterID: "Suzzit",
                postedDate: "Oct 5",
                heading: postHeading,
                text: postContent
            }
        ).then((data)=>{
            alert("POST ADDED SUCCESFULLY")
        }).catch((error)=>{
            alert(error)
        })
    }

    return (
        <>
            <form className='create-post-form'>
                <h2>Create New Post</h2>
                <div className='input-fields'>
                    <input type="text"
                        placeholder='Heading here'
                        value={postHeading}
                        onChange={(e) => { setPostHeading(e.target.value) }}
                    />
                    <input type="text"
                        placeholder='Content here'
                        value={postContent}
                        onChange={(e) => { setPostContent(e.target.value) }}
                    />
                </div>
                <div className='create-post-btn-container'>
                    <button className='create-post-btn' type='submit' onClick={createPost}>Post</button>
                </div>
            </form>
        </>
    )
}

export default CreatePost