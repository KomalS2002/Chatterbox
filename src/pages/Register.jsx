import React, { useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import {createUserWithEmailAndPassword , signInWithPopup, updateProfile} from "firebase/auth";
import {auth, storage, db, googleAuth} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from 'react-router-dom';


const Register = () => {
const [err, setErr] = useState()
const navigate = useNavigate()

const  handleSubmit = async (e) =>{
  e.preventDefault();
  const displayName = e.target[0].value;
  const email = e.target[1].value;
  const password = e.target[2].value;
  const file = e.target[3].files[0];

try {
const res = await createUserWithEmailAndPassword(auth, email, password);

const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on(
  (error) => {
    setErr(true);
  }, 
() => {
  getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
    await updateProfile(res.user,{
        displayName,
        photoURL: downloadURL,

      });
      
    await  setDoc(doc(db,"users", res.user.uid),{
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
    
      });
      
      await setDoc(doc(db, "userChat", res.user.uid), {});
      navigate("/")
    });
  }
);
 

  }catch(err){}
  setErr(true);
}




const signInWithGoogle=async()=>{
  try{
  await signInWithPopup(auth, googleAuth);
}
catch(err){}
setErr(true);
}

  return (
    <div className='formContainer'>
        <div className="formWrapper">
       <span className='name-front'>CHAT</span>
       <br />
       <span className='head'>Register</span>
<form onSubmit={handleSubmit}>
<input  type="text" placeholder='username'/>

<input  type="email" placeholder='email' />

<input  type="password" placeholder='password'/>

<input style={{display:"none"}} type= "file"  placeholder='file' id ="file"/>
<br />
<label htmlFor="file">add an Avatar <ImageIcon/></label>

<br />
<button className='cred' >Sign up</button>
<button className='cred' onClick={signInWithGoogle}>Sign In with google</button>
{err && <span>Something went wrong</span>}
</form>

<p className='line1'>Already have an account <Link to="/login">Log In</Link> </p>
        </div>
    </div>
  )
}

export default Register
