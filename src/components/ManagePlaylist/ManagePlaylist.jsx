import React, { useEffect, useState } from 'react'
import styles from './ManagePlaylist.module.css';

export default function ManagePlaylist() {

    let [count,setCount] = useState(0)
    useEffect(() => {},[])
  return (
    <>
      <h1 className='text-3xl text-red-500'>Hello From Manage Playlist</h1>
    </>
  )
}
