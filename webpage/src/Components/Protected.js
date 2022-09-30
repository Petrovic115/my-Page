import React from 'react'
import { Navigate, Outlet } from 'react-router-dom' 
import { useAuth } from '../Helpers/useAuth'

const Protected = () => {
   const { loggedIn, checkStatus } = useAuth()

   if(checkStatus) {
     return <h3>Loading...</h3>
   }

  return loggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default Protected