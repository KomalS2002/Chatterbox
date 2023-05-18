import React, {useContext} from 'react'
import Messages from './Messages';
import Input from './Input'
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ChatContext } from '../context/ChatContext';


const Chat = () => {
  const {data} = useContext(ChatContext);
  return (
    <div className='chat'>
     <div className="chatInfo">
      <span>{data.user?.displayName}</span>
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

export default Chat
