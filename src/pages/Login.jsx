import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
       <span className='name-front'>CHAT</span>
       <br />
       <span className='head'>Register</span>
<form >


<input  type="email" placeholder='email' />

<input  type="password" placeholder='password'/>

<input style={{display:"none"}} type= "file"  placeholder='file'/>
<br />
<label htmlFor="file">add an Avatar</label>
<br />
<button className='cred'>Sign in</button>
</form>
<p className='line1'>Don't  have an account <span>Register</span> </p>

        </div>
    </div>
  )
}

export default Login