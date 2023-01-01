import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './loginform.css'

const LoginForm = () => {

  const [email, setEmail] = useState('')
  const handleEmail = event => setEmail(event.target.value)

  const [password, setPassword] = useState('')
  const handlePassword = event => setPassword(event.target.value)

  const [remember, setRemember] = useState(true)
  const handleRemember = () => {
    if(!remember) {
      setRemember(true)
    } else {
      setRemember(false)
    }
  }

  const Login = () => {
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {
        "Content-type": "application/json",
      }
    })
      .then((res) => res.json())
      .then((status) => {
        if (status.message === 'success') {
          console.log("successful login");
        } else {
          console.log("login failed");
        }
      });
  }

  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className='login'>
        <h2 className='mb-3'>Login</h2>
        <form className='needs-validation'>
          <div className='form-group mb-2'>
            <label htmlFor='email' className='form-label'>Email Address</label>
            <input type="email" className="form-control" id='email' onChange={handleEmail} value={email}></input>
          </div>
          <div className='form-group mb-2'>
            <label htmlFor='password'className='form-label'>Password</label>
            <input type="password" className='form-control' id='password' onChange={handlePassword} value={password}></input>
          </div>
          <div className='form-group form-check mb-2'>
            <input type="checkbox" className='form-check-input' onChange={handleRemember} value={remember}></input>
            <label htmlFor='check' className='form-label'>Remember me</label>
          </div>
          <button type='submit' className='btn btn-success w-100 block mt-2' onClick={() => Login()}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm