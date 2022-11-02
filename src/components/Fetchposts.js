import React, { useState, useEffect } from 'react'
import { onSnapshot, collection, getDocs } from 'firebase/firestore'
import { db, collectionList } from '../firebase'
import './Post.css'
import logo from '../images/logo.png'

function Fetchposts() {
    const [userPosts, setUserPosts] = useState([])

    // console.log(db.collection)
    // onSnapshot(doc(db, "postsbyuser", "rGORRayDCGcmX6W8lnrm"), (doc) => {
    //     console.log("Current data: ", doc.data());
    //   });

    async function lookForChanges() {
        await onSnapshot(collection(db, "postsbyuser"), (newData) => {
            setUserPosts([])
            getPostDocs()
        });
    }

    async function getPostDocs() {
        try {
            let posts = await getDocs(collectionList)
            posts.forEach((elem) => {
                let data = elem.data() 
                setUserPosts(current => [{
                    id: elem.id, 
                    posterID: data.posterID, 
                    postedDate: data.postedDate, 
                    heading: data.heading,
                    text: data.text
                }, ...current])
            })
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getPostDocs()
        lookForChanges()
    }, [])

    return (
        <div className='fetchposts-container'>
            {
                userPosts.length > 0 ?
                    userPosts.map((posts, index) => {
                        return (<div className='post' key={index}>
                            <div className='post-details'>

                                <div className='post-by'>
                                    <img src={logo} className='image' />
                                    <span className='name'>Posted by <h2>{posts.posterID}</h2> </span>
                                </div>
                                <div className='post-on'>
                                    <span className='posted-time'> Posted on {posts.postedDate}</span>
                                </div>

                            </div>

                            <div className='post-data'>
                                <div className='post-heading'>
                                    <h2> {posts.heading} </h2>
                                </div>

                                <div className='post-body'>
                                    <p className='post-body-text'> {posts.text} </p>
                                </div>
                            </div>

                        </div>)
                    }) :
                    <div className='post'> No posts to show </div>
            }
        </div>
    )
}

export default Fetchposts