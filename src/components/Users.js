import React, { useEffect, useState } from 'react'

 
 import { useDispatch, useSelector } from 'react-redux'
import {  deleteUser, updateUser ,getUsersData, addUserData, deleteUserData, updateUserData} from '../redux/usersSlice';
 
 function Users() {
    const [name,setName] = useState('');
    const [userId,setUserId] = useState('');

 
  const {data} = useSelector((state) => state.users);
  const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getUsers())
// },[dispatch]);
   return (
     <div>
       <h1>Users Data</h1>
      {
         data.length>0 && data.map((user,index) => (
            <p key={index}>{user.name} <button onClick = {() => {setUserId(user.id),setName(user.name)}}>Edit</button> <button onClick={() => dispatch(deleteUserData(user.id))}>Delete</button></p>
             
         ))
      }
      <input type = "text" value ={name} onChange = {(e) => setName(e.target.value)}/>
      <br/>
      <button onClick={() => {
        if(userId){
            dispatch(updateUserData({id:userId,name}))
            setName("")
            setUserId("")
        }
        else{
            dispatch(addUserData({name}))
            setName("")
        }
       
        }}> {userId ? "Update" :"Save"}</button>
        <button onClick={() => dispatch(getUsersData())}>Get Users</button>
     </div>
   )
 }
 
 export default Users