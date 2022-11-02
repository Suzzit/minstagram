import React from 'react'
import './Navbar.css'
import logo from '../images/logo.png'
import { userLogout } from '../redux/userSlice'
import { useDispatch } from 'react-redux'
import { auth } from '../firebase'

function Navbar() {
    const dispatch = useDispatch()
    function logoutAction(){
        dispatch(
            userLogout()
        )
        auth.signOut()
    }
    return (
        <div className='navbar-container'>
            <nav className='navbar-nav'>
                <div className='logo-div'>
                    <img src={logo} />
                </div>
                <div className='search-bar-div'>
                    <form >
                        <input type="search"
                            placeholder='Search for users' />
                        <button type='submit'>
                            Search
                        </button>
                    </form>
                </div>
                <div className='navigation-links-div'>
                    {/* <img src={'https://picsum.photos/200'} alt="profile-img" /> */}
                    <button className='logout-btn' onClick={logoutAction}>
                        Logout
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar