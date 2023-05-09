import React, {useState} from 'react'
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {

const [err, setErr] = useState(false)
const navigate = useNavigate()

const  handleSubmit = async (e) =>{
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;

try {
  await signInWithEmailAndPassword(auth, email, password);
navigate("/")
}catch(err){}
  setErr(true);
}

 return (
    <div className='formContainer'>
        <div className="formWrapper">
       <span className='name-front'>CHAT</span>
       <br />
       <span className='head'>Log In</span>
<form  onSubmit={handleSubmit}>


<input  type="email" placeholder='email' />

<input  type="password" placeholder='password'/>

<input style={{display:"none"}} type= "file"  placeholder='file'/>
<br />
<button className='cred'>Sign in</button>
{err && <span>Something went wrong</span>}
</form>
<p className='line1'>Don't  have an account <Link to="/register">Register</Link> </p>
        </div>
    </div>
  )
}

export default Login