import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
  const {id} = useParams(); 
  const navigate = useNavigate();
  const {user} = useContext(UserContext);
  console.log(user[id])
  return (
    <div className='pl-10 pr-10'>
      <h1 className='text-4xl text-red-200 font-bold'>{user[id].userName} </h1>
      <h3 className='pl-5 text-blue-200 text-xl font-semibold'>{user[id].email}</h3>
      <button onClick={()=> navigate(-1)} className='px-3 py-1 bg-red-200 mt-5 rounded-md'>Go Back</button>
    </div>
  )
}

export default UserDetails
