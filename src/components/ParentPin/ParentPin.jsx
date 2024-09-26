import React, { useEffect, useState } from 'react'
import styles from './ParentPin.module.css';

export default function ParentPin() {

    let [count,setCount] = useState(0)
    useEffect(() => {},[])
  return (
    <div className='text-3xl text-red-500'>Hello from parent pin</div>
  )
}
