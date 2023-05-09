import { collection, query,where, getDocs, getDoc,doc ,setDoc, updateDoc, serverTimestamp} from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/authContext'
import {db} from "../firebase"
const Search = () => {

const [userName, setUserName] = useState("")
const [user, setUser] = useState(null)
const [err, setErr] = useState(false)
const {currentUser} = useContext(AuthContext)

const handleSearch =async()=>{
  const q = query(
  collection(db, "users"),
  where ("displayName", "==", userName)
  );
  
  try {
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc)=>{
    setUser(doc.data())
  });
} catch (err) { 
  setErr(true);
}
};


const handleKey = (e)=>{
e.code === "Enter" && handleSearch();
};

const handleSelect = async()=>{
  const combinedId = currentUser.uid > user.uid 
  ? currentUser.uid+user.uid 
  : user.uid + currentUser.uid;
  try {
  const res = await getDoc(doc(db, "chats", combinedId));
  
  if(!res.exits()){
  await setDoc(doc(db, "chats", combinedId), {messages: []});

  await updateDoc(doc(db, "userChat",currentUser.uid),{
    [combinedId +".userInfo"]:{
      uid: user.uid,
      displayName :user.displayName,
      photoURL: user.photoURL
    },
    [combinedId+".date"]:serverTimestamp()
  });

  await updateDoc(doc(db, "userChat",user.uid),{
    [combinedId +".userInfo"]:{
      uid: currentUser.uid,
      displayName :currentUser.displayName,
      photoURL: currentUser.photoURL
    },
    [combinedId+".date"]:serverTimestamp()
  });
  }
  }catch(err){}
  setUser(null);
  setUserName("")
};

  return (
    <div className='search'>
      <div className="searchForm">
        <input className='searchFormIn' type="text" placeholder='find a chat' 
        onKeyDown={handleKey} 
        onChange={e=>setUserName(e.target.value)} 
        value={userName}/>
      </div>
      {err && <span>User not found!</span>}
      {user && (<div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
        <span>{user.displayName}</span>
        </div>
      </div>)}
    </div>
  )
}

export default Search
