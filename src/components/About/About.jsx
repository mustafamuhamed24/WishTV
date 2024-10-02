import React, { useEffect, useState } from 'react'
import styles from './About.module.css';
import tv from '../../assets/Image/TV.PNG'
import mobil from '../../assets/Image/mobile movie screen.png'
import appStore from '../../assets/Image/appstore.png'
export default function About() {

  let [count, setCount] = useState(0)
  useEffect(() => { }, [])
  return (
    <>
      <section className="px-4 py-8 lg:py-16">
        <div className="container mx-auto">
          {/* First Row */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 my-8">
            <div className="w-full lg:w-3/4">
              <img src={tv} alt="TV media player" className="mx-auto lg:mx-0 w-full" />
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
              <h1 className="font-bold text-2xl lg:text-[2rem] text-[#413F3F] leading-tight">
                Wish TV is the most advanced and user-friendly TV media player.
              </h1>
              <p className="text-[#413F3F] text-lg lg:text-[1.5rem] mt-4">
                With Wish TV, you will enjoy your favorite media on your smart TV.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:space-x-8 ml-[7rem] my-8 py-14 ">
            <div className="w-full lg:w-3/4 text-center lg:text-left">
              <h1 className="font-bold text-2xl lg:text-[3rem] text-[#413F3F] leading-tight mb-3">
                Mobile version of</h1>
                <span className="text-[#B269B9] text-3xl lg:text-[3.5rem] mx-3 font-bold">WishTv</span>
                
                <h1 className="font-bold text-2xl lg:text-[3rem] text-[#413F3F] leading-tight">is available</h1>
              <p className="text-[#413F3F] text-lg lg:text-[1.9rem] mt-4 font-medium">
              Available for Android on play store and ios on app store.</p>
    <img src={appStore} alt="" />
            </div>
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img src={mobil} alt="Mobile Wish TV" className="mx-auto lg:mx-0" />
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container flex flex-col items-center justify-center">
          <div className="row flex grid-cols-2 my-8 items-center">
            <div className='w-3/4'>
              <img src={tv} alt="" />

            </div>
            <div className='w-1/2'>
              <h1 className='font-bold text-[2.25rem] text-[#413F3F]'>Wish tv is the most  advanced and user friendly TV media player.</h1>
              <p className='text-[#413F3F] text-[1.5rem]'>With Wish tv you will enjoy your favorite media on your smart TV. </p>
            </div>
          </div>

          <div className="row flex grid-cols-2 gap-28 my-8 ml-[7rem] items-center py-14">
            <div className='w-3/4 mx-10'>

              <h1 className='font-bold text-[3rem] text-[#413F3F] mx-1'>Mobile version of
                 <span className='text-[3.5rem] mx-3 text-[#B269B9]'>WishTv</span> is available</h1>
              <p className='text-[#413F3F] text-[1.5rem]'>With Wish tv you will enjoy your favorite media on your smart TV. </p>
            </div>
            <div className='w-1/2'>
              <img src={mobil} alt="" />
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}
