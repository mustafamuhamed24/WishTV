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

      <section className="px-4 py-8 lg:py-16 z-10">
        <div className="container mx-auto">

          {/* First Row */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 my-8">
            <div className="w-full lg:w-3/4">
              <img src={tv} alt="TV media player" className="mx-auto lg:mx-0 w-full max-w-[400px] lg:max-w-none" />
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left px-4">
              <h1 className="font-bold text-2xl lg:text-[2rem] text-[#413F3F] leading-tight">
                Wish TV is the most advanced and user-friendly TV media player.
              </h1>
              <p className="text-[#413F3F] text-lg lg:text-[1.5rem] mt-4">
                With Wish TV, you will enjoy your favorite media on your smart TV.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:space-x-8 my-8 lg:py-10">
            <div className="w-full lg:w-3/4 text-center lg:text-left lg:ml-[6.25rem]">
              <h1 className="font-bold text-2xl lg:text-[2.5rem] text-[#413F3F] leading-tight mb-3">
                Mobile version of
              </h1>
              <span className="text-[#B269B9] text-3xl lg:text-[3rem] mx-3 font-bold">WishTv</span>
              <h1 className="font-bold text-2xl lg:text-[2.5rem] text-[#413F3F] leading-tight">
                is available
              </h1>
              <p className="text-[#413F3F] text-lg lg:text-[1.7rem] mt-4 font-medium">
                Available for Android on Play Store and iOS on App Store.
              </p>
              <img src={appStore} className="w-[18rem] lg:w-[30rem] mx-auto lg:mx-0 mt-6" alt="App Stores" />
            </div>
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img src={mobil} alt="Mobile Wish TV" className="mx-auto lg:mx-0 w-[15rem] lg:w-[20rem]" />
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
