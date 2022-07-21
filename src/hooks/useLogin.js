import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [isCancelledLogin, setIsCancelledLogin] = useState(false)
  const [errorLogin, setErrorLogin] = useState(null)
  const [isPendingLogin, setIsPendingLogin] = useState(false)
  const { dispatch } = useAuthContext()

  const navigate = useNavigate();

  const login = async (email, password) => {
    setErrorLogin(null)
    setIsPendingLogin(true)
  
    try {
      // login
      const res = await projectAuth.signInWithEmailAndPassword(email, password)

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (res) {
        navigate("/")
        console.log('Login réussi')
      }
      console.log(res);

      if (!isCancelledLogin) {
        setIsPendingLogin(false)
        setErrorLogin(null)
      }
    } 
    catch(err) {
      if (!isCancelledLogin) {
        setErrorLogin(err.message)
        setIsPendingLogin(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelledLogin(true)
  }, [])

  return { login, isPendingLogin, errorLogin }
}