import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { auth } from '../firebase'

const Nav = () => {
const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="name-nav">CHAT</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span className='username'>{currentUser.displayName}</span>
        <button className='out' onClick={()=> signOut(auth)}>Log out</button>
      </div>
    </div>
  )
}

export default Nav
