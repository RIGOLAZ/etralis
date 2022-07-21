import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [errorSignup, setErrorSignup] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  
  const navigate = useNavigate();
  const signup = async (email, password, userName) => {
    setErrorSignup(null)
    setIsPending(true)
  
    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      console.log(res);

      if (!res) {
        throw new errorSignup('Could not complete signup')
      } else {
      navigate("/")
      console.log('Nouveau user créé!')
      }

      // add display name to user
      await res.user.updateProfile({ userName })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setErrorSignup(null)
      }
    } 
    catch(err) {
      if (!isCancelled) {
        setErrorSignup(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { signup, errorSignup, isPending }
}