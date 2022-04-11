import React, { useState } from 'react'
import Classcompo from './Classcompo'

const Fun = () => {
    const[data,setData]=useState(true)
  return (
    <>
    
   
    <center>
    <button onClick={()=>setData(!data)}>Function</button>
    {
  data? <h1>Click here to see functional component</h1>:<h1>welcome to functional component</h1>
    }
    </center>
   
  <Classcompo />
    </>
  )
}

export default Fun