import { useEffect, useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const [isCancelledLogout, setIsCancelledLogout] = useState(false)
  const [errorLogout, setErrorLogout] = useState(null)
  const [isPendingLogout, setIsPendingLogout] = useState(false)
  const { dispatch } = useAuthContext()
  
  const logout = async () => {
    setErrorLogout(null)
    setIsPendingLogout(true)

    try {
      // sign the user out
      await projectAuth.signOut()
      
      // dispatch logout action
      dispatch({ type: 'LOGOUT' })

      // update state
      if (!isCancelledLogout) {
        setIsPendingLogout(false)
        setErrorLogout(null)
      } 
    } 
    catch(err) {
      if (!isCancelledLogout) {
        setErrorLogout(err.message)
        setIsPendingLogout(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelledLogout(true)
  }, [])

  return { logout, errorLogout, isPendingLogout }
}