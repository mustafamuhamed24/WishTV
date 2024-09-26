import React, { useEffect, useState } from 'react'
import styles from './AccountDetails.module.css';

export default function AccountDetails() {

    let [count,setCount] = useState(0)
    useEffect(() => {},[])
  return (
    <div className='text-3xl text-red-500'>Hello from Account Details</div>
  )
}
