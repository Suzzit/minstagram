import React, { useState } from 'react'
import logo from '../images/logo.png'
import Home from './Home.js'
import './Register.css'
import { createUserWithEmailAndPassword, sendSignInLinkToEmail, updateProfile } from 'firebase/auth'
import { auth } from '../firebase'
import { userLogin, userLogout, selectUser } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Register() {
    //States
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    //Function that runs after clicking the sign up button
    function registerUser(e) {
        e.preventDefault()

        // sendSignInLinkToEmail(auth, email)
        // .then((res)=>{
        //     console.log(res)
        // })

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(
                    auth.currentUser,
                    {
                        displayName: displayName,
                        fullName: fullName
                    }
                )
                    .then(() => {
                        dispatch(
                            userLogin({
                                loggedIn: true,
                                userName: userCredential.user.fullName,
                                userEmail: userCredential.user.email,
                                userDisplayName: userCredential.user.displayName,
                            })
                        )
                    })
            }).catch((err) => {
                console.log(err)
                setError(err)
            })
    }

    //Function to close error popup
    function closeError(e){
        if(error){
            setError('')
        }
    }

    return (
        <>
            {
                user.user ? //Checks if there is a user present in Redux Store
                    <Home /> :

                    <div className="container">
                        <form className='register-form'>
                            <div className='logo-container'>
                                <img src={logo} alt="ig-logo" className='logo-img' />
                            </div>

                            <h2>Sign up to see photos and videos from your friends</h2>
                            <button className='facebook-login-btn'> Login with Facebook </button>

                            <span>OR</span>
                            <input type="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />

                            <input type="text"
                                placeholder='Full Name'
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)} />

                            <input type="text"
                                placeholder='Display Name'
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)} />

                            <input type="password"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />

                            <button
                                type='submit'
                                className='submit-btn'
                                onClick={registerUser}>
                                Sign Up
                            </button>
                            <Link className='link-to-register-login' to={'/'}>Already have an account?</Link>
                        </form>
                        <div className={error ?
                        'error-popup error-on' :
                        'error-popup error-off'}>
                            {error.message}

                            <button className='close-error-btn' onClick={closeError}>X</button>
                        </div>
                    </div>
            }
        </>
    )
}

export default Register