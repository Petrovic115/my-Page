import '../Styles/Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// firebase 
import { useAuth } from '../Context/AuthContext'

const ForgotPass = () => {
    const { resetPassword } = useAuth()

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();


    const resetPass = async (e) => {
        e.preventDefault()
        try {
          await resetPassword(email)
          toast.success("Check email for further instructions")
          navigate('/')
        } catch (error) {
          toast.error('Failed to reset password')
        }
    }

  return (
        <>
         <div className="formHolder">
            <div className='leftLogin'>
                <header>
                    <h1 className='loginTitle'>
                        Reset Password
                    </h1>
                </header>
                <form onSubmit={resetPass}>
                <div className="password">
                  <input className='emailInput' autoComplete='off' type="email" id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                    <div className="sign-in">
                        <button type='submit' disabled={loading} className='signIn-btn'>
                            Reset password
                        </button>
                    </div>
                </form>
            </div>
            <div className='rightLogin'>
               
            </div>
         </div>
        </>
  )
}

export default ForgotPass