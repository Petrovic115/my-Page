import '../Styles/Login.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { toast } from 'react-toastify'
import GoogleAuth from '../Components/GoogleAuth'
// firebase 
import { useAuth } from '../Context/AuthContext'


const Login = () => {
    const { login } = useAuth()

    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();


    const signIn = async (e) => {
        e.preventDefault()
        try {
           setLoading(true) 
           await login( email, password )
           navigate('/home')

        } catch (error) {
            toast.error("Failed to log in")
        }
        setLoading(false)
    }

  return (
        <>
         <div className="formHolder">
            <div className='leftLogin'>
                <header>
                    <h1 className='loginTitle'>
                        Welcome back!
                    </h1>
                </header>
                <form onSubmit={signIn}>
                    <input className='emailInput' autoComplete='off' type="email" id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <div className="password">
                        <input className='passwordInput' autoComplete='off' type={showPass ? "text" : "password"} placeholder='Password' name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <FaEye className='showPass' onClick={() => setShowPass(!showPass)} />
                    </div>
                    <Link className='forgotPass' to='/forgot-password'>
                        Forgot Password
                    </Link>
                    <div className="sign-in">
                        <button type='submit' disabled={loading} className='signIn-btn'>
                            Sign In
                        </button>
                    </div>
                </form>
                <GoogleAuth />
                <div className='signUp-link'>
                    <p>Dont have an account</p>
                    <Link className='signUpLink' to='/sign-up'>
                        Sign Up
                    </Link>
                </div>
            </div>
            <div className='rightLogin'>
               
            </div>
         </div>
        </>
  )
}

export default Login