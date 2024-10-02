import React, { useEffect, useState } from 'react'
import classes from './Home.module.css';
import wishTv from '../../assets/Image/wishtv .jpg'
import samsung from '../../assets/Image/samsung.png'
import android from '../../assets/Image/android.png'
import lg from '../../assets/Image/lg.png'
import sony from '../../assets/Image/sony.png'
import About from '../About/About';
import Faqs from '../Faqs/Faqs';
export default function Home() {

  let [count, setCount] = useState(0)
  useEffect(() => { }, [])
  return (
    <>
      <section className={classes.home}>
        <div className="text-white h-auto lg:h-screen p-6 lg:p-20">
          <h1 className="text-2xl lg:text-3xl text-center my-3">Manage Your Playlist</h1>

          <div className={`${classes.macaddres} mt-8 `}>
            <form className="max-w-xs lg:max-w-sm mx-auto rounded-sm p-6">
              <h1 className="text-lg lg:text-2xl mb-5 text-center">Login to add your playlist</h1>

              <div className="mb-5">
                <label htmlFor="macAddress" className="block mb-2 text-sm lg:text-base text-white">MAC ADDRESS</label>
                <input
                  type="text"
                  id="macAddress"
                  className="w-full p-2.5 bg-gray-50 border text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="deviceKey" className="block mb-2 text-sm lg:text-base text-white">DEVICE KEY</label>
                <input
                  type="text"
                  id="deviceKey"
                  className="w-full p-2.5 bg-gray-50 border text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 text-white bg-[#B269B9] hover:bg-[#a158a3] rounded-lg focus:ring focus:outline-none"
              >
                Login
              </button>
            </form>
          </div>

          <div className="mt-12">
            <h1 className="text-3xl lg:text-4xl text-[#B269B9] font-bold text-center">WishTv</h1>
            <p className="text-sm lg:text-2xl max-w-3xl mx-auto">
              Our platform is the hub for entertainment solutions, boasting an extensive collection of streaming technologies
              and thoughtfully curated content.
            </p>
          </div>
        </div>
      </section>


      <section>
        <img src={wishTv} className="w-full h-auto" alt="Wish TV" />
      </section>

      <section className="bg-black py-20 text-center">
        <h3 className="text-white mb-8 text-lg lg:text-2xl">Watch Wish TV with these compatible streaming devices</h3>

        <div className="flex flex-col lg:flex-row justify-around items-center space-y-6 lg:space-y-0 lg:space-x-8">
          <img src={samsung} className="w-40 lg:w-60" alt="Samsung" />
          <img src={android} className="w-40 lg:w-48" alt="Android" />
          <img src={lg} className="w-32 lg:w-32" alt="LG" />
          <img src={sony} className="w-40 lg:w-48" alt="Sony" />
        </div>
      </section>
<About />
<Faqs />
    </>
  )
}