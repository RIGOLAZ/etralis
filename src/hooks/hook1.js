import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {
  const [emailSignup, setEmailSignup] = useState('')
  const [passwordSignup, setPasswordSignup] = useState('')
  const [displayNameSignup, setDisplayNameSignup] = useState('')
  const { signup, isPendingSignup, errorSignup } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(emailSignup, passwordSignup, displayNameSignup)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>sign up</h2>
      <label>
        <span>email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmailSignup(e.target.value)} 
          value={emailSignup}
        />
      </label>
      <label>
        <span>password:</span>
        <input 
          type="password" 
          onChange={(e) => setPasswordSignup(e.target.value)} 
          value={passwordSignup} 
        />
      </label>
      <label>
        <span>display name:</span>
        <input 
          type="text" 
          onChange={(e) => setDisplayNameSignup(e.target.value)}
          value={displayNameSignup}
        />
      </label>
      { !isPendingSignup && <button className="btn">sign up</button> }
      { isPendingSignup && <button className="btn" disabled>loading</button> }
      { errorSignup && <p>{errorSignup}</p> }
    </form>
  )
}