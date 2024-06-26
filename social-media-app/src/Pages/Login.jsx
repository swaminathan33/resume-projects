import React, { useState } from 'react'
import './Css/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../Components/contexts/AuthContext'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {logIn, loading, setLoading} = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true)
    setTimeout(() => {
      logIn(email, password)
    }, 1500)
    setLoading(false)
    navigate('/')
  }

  return (
    <div className='login'>
      {
        loading ? <div>loading...</div> : <>
          <div className="content">
          <div className="title">Social Demo</div>
          <p>Connect With friends and the world around you on social Social Demo.</p>
      </div>
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <div className="email"><input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <div className="password"><input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /></div>

          <div className="signup">
            <button type='submit'><b>login</b></button>
          </div>
          <span className="forget_password">
          <Link to={'/reset-password'}><span>Forget Password ?</span></Link>
          </span>
          <div className="login">
            <button><Link to={'/register'}>Create Account</Link></button>
          </div>

        </form>
      </div>
        </>
      }
    </div>
  )
}

export default Login
