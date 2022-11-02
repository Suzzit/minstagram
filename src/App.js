import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, redirect, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { userLogin, userLogout } from './redux/userSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(userLogin({
          loggedIn: true,
          userEmail: user.email,
          userDisplayName: user.displayName
        }))
      } else {
        dispatch(userLogout())
        auth.signOut()
      }
    })
  }, [])

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
