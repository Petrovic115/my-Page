import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState()

    function signUp(email, password){
       return  auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
      return auth.signInWithEmailAndPassword(email, password)
    }

    function resetPassword(email) {
      return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
      return auth.currentUser.updateEmail(email)
    }

    function updatePassword(password) {
      return auth.currentUser.updatePassword(password)
    }

    function updateName(name) {
      return auth.currentUser.updateProfile(name)
    }

    function logout() {
      return auth.signOut()
    }
    
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])
    
    const value = {
        currentUser,
        signUp,
        login,
        resetPassword,
        updateEmail,
        updatePassword,
        updateName,
        logout
       
    }

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
