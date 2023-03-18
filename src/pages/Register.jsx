import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
       <span className='name-front'>CHAT</span>
       <br />
       <span className='head'>Register</span>
<form >
<input  type="text" placeholder='username'/>

<input  type="email" placeholder='email' />

<input  type="password" placeholder='password'/>

<input style={{display:"none"}} type= "file"  placeholder='file'/>
<br />
<label htmlFor="file">add an Avatar</label>
<br />
<button className='cred' >Sign up</button>
</form>

<p className='line1'>Already have an account <span>Login</span> </p>
        </div>
    </div>
  )
}

export default Register
