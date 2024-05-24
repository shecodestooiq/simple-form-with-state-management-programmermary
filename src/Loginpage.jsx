import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './Context';

export default function LoginPage() {
  const { setUser, setPassword, setAge } = useContext(UserContext);

  const onChangeUser = (e) => {
    setUser(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <form className='form'>
        <input className='input-item'type='text' onChange={onChangeUser} placeholder='name' />
        <br />
        <input className='input-item' type='password' onChange={onChangePassword} placeholder='password' />
        <br />
        <input className='input-item' type='number' onChange={onChangeAge} placeholder='Age' />
        <br />
        <Link to={'/UserPageInfo'}>
          <input className='input-btn' type='submit' />
        </Link>
      </form>
    </div>
  );
}
