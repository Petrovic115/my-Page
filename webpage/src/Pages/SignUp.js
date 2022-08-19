import '../Styles/Login.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { toast } from 'react-toastify'
// firebase
import { useAuth } from '../Context/AuthContext'
import { getAuth, updateProfile } from 'firebase/auth'


export default function SignUp() {
    const { signUp } = useAuth()
    
    const [showPass, setShowPass] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passConfirm, setPassConfirm] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const userSingUp = async (e) => {
        e.preventDefault()
        if(password != passConfirm) {
            return toast.error("Passwords do not match")
        }
        try {
           setLoading(true) 
           const auth = getAuth()
           await signUp( email, password )
           updateProfile(auth.currentUser, {
            displayName: name
           })
           navigate('/')

        } catch (error) {
            toast.error("Failed to create account")
        }
        setLoading(false)
    }

  return (
        <>
         <div className="formHolder">
         <div className='leftLogin'>
            <header>
                <h1 className='loginTitle'>
                    Sign up!
                </h1>
            </header>
            <form onSubmit={userSingUp}>
                <input className='nameInput'  autoComplete='off' type="text" id='name' placeholder='First and last name' value={name} onChange={(e) => setName(e.target.value)}/>
                <input className='emailInput'  autoComplete='off' type="email" id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <div className="password">
                    <input className='passwordInput'  autoComplete='off' type={showPass ? "text" : "password"} placeholder='Password' name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <FaEye className='showPass' onClick={() => setShowPass(!showPass)} />
                    <input className='passwordInput' autoComplete='off' type={showPass ? "text" : "password"} placeholder='Repeat password' name="password" id="passwordConfirm" value={passConfirm} onChange={(e) => setPassConfirm(e.target.value)} />
                    <FaEye className='showPass'  onClick={() => setShowPass(!showPass)} />
                </div>
                <div className="sign-in">
                    <button type='submit' disabled={loading} className='signIn-btn'>
                        Sign Up
                    </button>
                </div>
            </form>
            <div className='signUp-link'>
                <p>Already have and account</p>
                <Link className='signUpLink' to='/'>
                    Sign In
                </Link>
            </div>
            </div>
            <div className='rightLogin'>
               
            </div>
         </div>
        </>
  )
}
