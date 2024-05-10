import React, { useContext } from 'react'
import UserContext from './Context'
export default function UserPageInfo() {
    const {user , password} = useContext(UserContext)
   
    console.log(user)
  return (
   
    <div>
      <h1>welcom</h1>
      <h3>name:{user}</h3>
      <h3>password:{password}</h3>
    </div>
  )
}
