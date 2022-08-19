import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Navbar from '../Components/Navbar'
import { useAuth } from '../Context/AuthContext'
import '../Styles/Profile.css'

const Profile = () => {
  const { currentUser, logout, updatePassword, updateEmail, updateName } = useAuth();
  const navigate = useNavigate();
  const [changeProfile, setChangeProfile] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passConfirm, setPassConfirm] = useState('')

 
   
  const handleLoguout = () => {
    logout()
    navigate('/')
  }

  const updateProfiles = () => {

    if(password != passConfirm) {
      return toast.error("Passwords do not match")
    }

    if(currentUser.email !== email) {
      updateEmail(email)
    }else {
      toast.error('New email cant be the as old one')
    }
    if(currentUser.password !== password) {
      updatePassword(password)
    }else {
      toast.error("New password cant be the same as old one")
    }



  }

  return (
    <>
     <Navbar />
     <div className='contain'>
      <div className="profileHeading">
        <div className="profileTitle">My Profile</div>
        <div className="signOut">
          <button type='button' className='signOutBtn' onClick={handleLoguout}>Signout</button>
        </div>
      </div>
      <div className='profileDetailsHeader'>
        <p className='profHead'>Personal Details</p>
        <p className='changePersonalDetails' onClick={() => {
          changeProfile && updateProfiles();
          setChangeProfile((prevState) => !prevState)
        }}>
          {changeProfile ? "done" : "edit"}
        </p>
      </div>
      <div className="profileDetails">
        <form className='profileForm' >
          <input type="text" name='name' className={changeProfile ? "profileNameInputActive" : "profileNameInputActive"} disabled={true} value={currentUser.displayName} />
          <input type="text" autoComplete='off' name='email' className={changeProfile ? "profileNameInput" : "profileNameInputActive"} disabled={!changeProfile} defaultValue={currentUser.email}  onChange={(e) => setEmail(e.target.value)} />
          <input type='text' autoComplete='off' name='password' placeholder='Enter password' className={changeProfile ? "profileNameInput" : "profileNameInputActive"} disabled={!changeProfile} value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="text" autoComplete='off' name='passConfirm' placeholder='Confirm password' className={changeProfile ? "profileNameInput" : "profileNameInputActive"} disabled={!changeProfile} value={passConfirm} onChange={(e) => setPassConfirm(e.target.value)} />
        </form>
      </div>
     </div>
    </>
  )
}

export default Profile