import React, { useEffect, useState } from 'react'
import classes from './Home.module.css';
import wishTv from '../../assets/Image/wishtv .jpg'
import samsung from '../../assets/Image/samsung.png'
import android from '../../assets/Image/android.png'
import lg from '../../assets/Image/lg.png'
import sony from '../../assets/Image/sony.png'
export default function Home() {

  let [count, setCount] = useState(0)
  useEffect(() => { }, [])
  return (
    <>
      <section className={classes.home}>

        <div className="text-white h-screen p-20">
          <h1 className='text-3xl  text-center my-3'>Manage Your Playlist</h1>


          <div className={classes.macaddres}>
            {/* <div className={classes.gradient}></div> */}
            <form className="max-w-sm mx-auto rounded-sm">
              <h1 className='text-2xl mb-5'>Login to add your playlist</h1>
              <div className="mb-5">
                <label htmlFor="macAddress" className="block mb-4 text-sm font-medium text-white dark:text-white">MAC ADDRESS</label>
                <input type="text" id="macAddress" className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
              </div>
              <div className="mb-10">
                <label htmlFor="deviceKey" className="block mb-4 text-sm font-medium text-white dark:text-white">DEVICE KEY</label>
                <input type="text" id="deviceKey" className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>

              <button type="submit" className="text-white hover:bg-[#B269B9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center bg-[#B269B9]">Login</button>
            </form>

          </div>
          <div className='text-center'>
            <h1 className='text-4xl text-[#B269B9] font-bold'>WishTv</h1>

            <p className='text-[1.5rem]'>Our platform is the hub for entertainment solutions,
              an boasting</p>
            <p className='text-[1.5rem]'>extensive collectionof streaming technologies andthoughtfully</p>
            <p className='text-[1.5rem]'>curated content.</p>
          </div>
        </div>

      </section>
      <section>
        <img src={wishTv} className=' w-screen' alt="" />
      </section>
      <section className='bg-black w-50 h-50 text-center'>
        <div className="p-20">
          <h3 className='text-white mb-8 text-2xl'>Watch wish tv with these compatible streaming devices</h3>
          <div className='flex justify-between items-center'>
            <img src={samsung} className='w-60 mx-4' alt="" />
            <img src={android} className='w-60 mx-4' alt="" />
            <img src={lg} className='w-48 mx-4' alt="" />
            <img src={sony} className='w-60 mx-4' alt="" />
          </div>
        </div>
      </section>
    </>
  )
}