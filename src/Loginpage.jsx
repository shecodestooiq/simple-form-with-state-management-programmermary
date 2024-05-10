import React, { useContext, useState } from 'react'
import { Navigate,  useNavigate } from 'react-router-dom'
import UserContext from './Context'

export default function Loginpage() {
    const[name , setName] = useState('')
    const [password ,setPassword] =useState('')
    const { setUser, setPassword: setUserPassword } = useContext(UserContext);
    const navigate = useNavigate()
    const handleSubmit = e =>{
        e.preventDefault()
        setUser(name)
        setPassword(password)
         navigate('/userinfo')
    }
  return (
    <div>
      <h1>LoginPage</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type='text' 
        value={name} 
        onChange={e=>setName(e.target.value)}
        placeholder='name'/><br></br>
       <input 
        type='password' 
        value={password} 
        onChange={e=>setPassword(e.target.value)}
        placeholder='password'/><br/>
        <input 
        type="submit"
         />
      </form>
      <h1>{name}</h1>
      <h1>{password}</h1>
    </div>
  )
}
