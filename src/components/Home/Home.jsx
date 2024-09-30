import React, { useEffect, useState } from 'react'
import classes from './Home.module.css';
import managepalylists from '../../assets/Image/manage playlist bg.png'
export default function Home() {

    let [count,setCount] = useState(0)
    useEffect(() => {},[])
  return (
    
    <div>
      <img src={managepalylists} className='w-full h-full' alt="" />
    </div>
  )
}