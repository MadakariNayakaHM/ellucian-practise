import React, { useState } from 'react'

export default function FunctionalComponent() {
const[count,setCount] =useState(0)


  return (
    <>
        <h1>This is Functional  component with hooks</h1>
        <div className='sub-container'>
            <button className='btn' onClick={(e)=>{setCount(c=>c-1)}}>-</button>
            <span className='span'>{count}</span>
            <button className='btn' onClick={(e)=>{setCount(c=>c+1)}}>+</button>
        </div>
 </>
  )
}
