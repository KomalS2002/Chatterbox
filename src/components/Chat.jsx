import React from 'react'
import Messages from './Messages';
import Input from './Input'
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const chat = () => {
  return (
    <div className='chat'>
     <div className="chatInfo">
      <span>Koko</span>
      <div className="chatIcons">
       < VideoCallRoundedIcon/>
       <PersonAddIcon/>
       <MoreHorizIcon/> 
      </div>
      
     </div>
     <Messages/>
     <Input/>
    </div>
  )
}

export default chat
