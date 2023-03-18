import React from 'react'

const Nav = () => {
  return (
    <div className='navbar'>
      <span className="name-nav">CHAT</span>
      <div className="user">
        <img src="https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png" alt="" />
        <span className='username'>Koko</span>
        <button className='out'>Log out</button>
      </div>
    </div>
  )
}

export default Nav
