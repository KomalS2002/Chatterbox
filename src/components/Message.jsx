import React from 'react'


function Message() {
  return (
    <div className='message'>
        <div className="messageInfo">
        <img src="JCC.png" alt="" />
        <span>Just now</span>
        </div>
        <div className="messageContent">
            <p>Hello</p>
        {/* <img src="JCC.png" alt="" /> */}
            {/* <span>Just now</span> */}
        </div>
    </div>
  )
}

export default Message