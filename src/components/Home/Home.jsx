import React, { useEffect, useState } from 'react'
import styles from './Home.module.css';

export default function Home() {

    let [count,setCount] = useState(0)
    useEffect(() => {},[])
  return (
    <div className='text-3xl text-red-500'>Hello From Home</div>
  )
}
