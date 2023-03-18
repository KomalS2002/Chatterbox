import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';

function Input() {
  return (
    <div className='input'>
        <input type="text" placeholder='Type something...' />
       <div className="send">
       <AttachFileIcon/>
        <input type="file" style={{display: "none"}} id ="file" />
        <label htmlFor="file">
        <ImageIcon/>
        </label>
        <button>Send</button>
       </div>
    </div>
  )
}

export default Input