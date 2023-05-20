import React from 'react'

 
 import { useDispatch, useSelector } from 'react-redux'
import { increament,decreament, increamentByValue } from '../redux/counterSlice';
 
 function Counter() {
  const {count} = useSelector((store) => store.counter);
  const dispatch = useDispatch();
   return (
     <div>
      <p>Counter:{count} </p>
      <button onClick={() =>dispatch(increament())}>Increament</button>
      <button onClick = {() => dispatch(decreament())}>Decreament</button>
      <button onClick={() =>dispatch(increamentByValue(50))}>IncreamentBy50</button>
     </div>
   )
 }
 
 export default Counter