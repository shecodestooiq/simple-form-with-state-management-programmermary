import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from './Context'
export default function UserPageInfo() {
    const {user , password , age} = useContext(UserContext)
   
    console.log(password)
  return (
   
    <div className='user-main'>
      <h1 className='name'>welcome {user}</h1>
      <h3>password:{password}</h3>
      <h3>Age:{age}</h3>
      <Link to={'/'}><button type='submint' className='input-btn'>Back </button></Link>
    </div>
  )
}
