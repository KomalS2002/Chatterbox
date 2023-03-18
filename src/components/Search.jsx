import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input className='searchFormIn' type="text" placeholder='find a chat' />
      </div>
      <div className="userChat">
        <img src="https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png" alt="" />
        <div className="userChatInfo">
        <span>Koko</span>
        </div>
      </div>
    </div>
  )
}

export default Search
