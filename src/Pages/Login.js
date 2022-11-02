import { signInWithEmailAndPassword } from 'firebase/auth'
import { React, useState, useEffect } from 'react'
import logo from '../images/logo.png'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase'
import { userLogin, userLogout } from '../redux/userSlice'
import { selectUser } from '../redux/userSlice'
import Home from './Home'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user = useSelector(selectUser)

    // function checkLocalStorage(){
    //     console.log(window.localStorage.emailForSignIn)
    //     if(window.localStorage.emailForSignIn != null && window.localStorage.passForSignIn != null){

    //         loginAction(window.localStorage.emailForSignIn, window.localStorage.passForSignIn)
    //     }
    // }

    function loginAction(e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((data)=>{
            console.log(data.user.email)
            // window.localStorage.setItem("emailForSignIn", data.user.email)
            // window.localStorage.setItem("passForSignIn", password)
        }).catch((error)=>{
            console.log(error)
        })
    }



    useEffect(() => {
        // checkLocalStorage()
    }, [])
    
    return (
        <>
            {
                user.user ?
                    <Home /> :
                    <div className="container">
                        <form className='register-form'>
                            <div className='logo-container'>
                                <img src={logo} alt="ig-logo" className='logo-img' />
                            </div>

                            <h2>Login</h2>
                            <button className='facebook-login-btn'> Login with Facebook </button>

                            <span>OR</span>

                            <input type="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />

                            <input type="password"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />

                            <button
                                type='submit'
                                className='submit-btn'
                                onClick={loginAction}>
                                Sign In
                            </button>

                            <Link className='link-to-register-login' to={'/register'}>Create a new account</Link>
                        </form>
                    </div>

            }
        </>
    )
}

export default Login