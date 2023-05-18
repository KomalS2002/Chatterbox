import React, {useContext, useState} from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
import { ChatContext } from '../context/ChatContext';
import { AuthContext } from '../context/authContext';
import {db, storage} from "../firebase"
import { updateDoc,doc, arrayUnion, Timestamp, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";
import {v4 as uuid} from "uuid";

function Input() {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const {data} = useContext(ChatContext); 
  const {currentUser} = useContext(AuthContext)

  const handleSend =async()=>{
    if(img){   
    const storageRef = ref(storage, uuid());
    const uploadTask = uploadBytesResumable(storageRef, img);

    uploadTask.on(
      (error) => {
        // setErr(true);
      }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
        await updateDoc(doc(db, "chats", data.chatId),{
          messages : arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
            img: downloadURL,
          }),
        });
        });
      }
    );

    }else{
  await updateDoc(doc(db, "chats", data.chatId),{
    messages : arrayUnion({
      id: uuid(),
      text,
      senderId: currentUser.uid,
      date: Timestamp.now(),
      
    }),
  });
    }
  await updateDoc(doc(db, "userChat" , currentUser.uid),{
    [data.chatId + ".lastMessage"]:{
      text,
    },
    [data.chatId + ".date"] : serverTimestamp(),
  });

  await updateDoc(doc(db, "userChat" , data.user.uid),{
    [data.chatId + ".lastMessage"]:{
      text,
    },
    [data.chatId + ".date"] : serverTimestamp(),
  });

  setText("");
  setImg(null);
  };
  return (
    <div className='input'>
        <input type="text" 
        placeholder='Type something...' 
        onChange={(e)=>setText(e.target.value)}
        value ={text}/>
       <div className="send">
       <AttachFileIcon/>
        <input type="file" 
        style={{display: "none"}} 
        id ="file" 
        onChange={(e)=>setImg(e.target.file[0])}/>
        <label htmlFor="file">
        <ImageIcon/>
        </label>
        <button onClick={handleSend}>Send</button>
       </div>
    </div>
  )
}

export default Input;