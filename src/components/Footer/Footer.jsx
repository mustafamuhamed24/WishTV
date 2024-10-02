import React, { useEffect, useState } from 'react'
import styles from './Footer.module.css';

export default function Footer() {

  let [count, setCount] = useState(0)
  useEffect(() => { }, [])
  return (
    <>
      <footer className='bg-black'>
        <div className="mx-auto w-full max-w-screen-xl">
          <div  className={`${styles.footermain} grid grid-cols-2 gap-16 px-4 py-6 lg:py-8 md:grid-cols-3`}>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">About</h2>
              <p className="text-white font-medium text-[18px]" id="about-footer">
              Wish tv offer all image qualities to view our iptv service everywhere, regardless of your
              network speed on: Mobile / TV / Android box / PC ..
              </p>
            </div>
            <div className='mx-5'>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Technical support</h2>
              <ul className="text-white font-medium">
                <li className="mb-2">
                 
                  <a href="https://wa.me/+4591426091" className="hover:underline">+982763692726</a>

                </li>
                <li className="mb-2">
                 
                  <a href="https://wa.me/+971509856234" className="hover:underline">+982763692726</a>
                  /
                </li>

              </ul>
            </div>

            <div>
              <h2 id="main-policy" className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Policies & Conditions</h2>
              <ul id="policy" className="text-white font-medium">
                <li className="mb-2">
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Privacy Policy </a>
                </li>
              </ul>
            </div>
          </div>
          <div  className={`${styles.footer2}px-4 py-6 text-center`}>
            <span className="text-sm text-white dark:text-gray-300 sm:text-center">Copyright © 2024 Wish tv </span>

          </div>
        </div>
      </footer>
    </>
  )
}
