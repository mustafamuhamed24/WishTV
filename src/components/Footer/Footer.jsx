import React, { useEffect, useState } from 'react'
import styles from './Footer.module.css';

export default function Footer() {

  let [count, setCount] = useState(0)
  useEffect(() => { }, [])
  return (
    <>
     
      <footer className="bg-black p-10">
  <div className="mx-auto w-full max-w-screen-xl">
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-6 lg:py-8`}>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-white uppercase">About</h2>
        <p className="text-white font-medium text-base md:text-[18px]">
          Wish TV offers all image qualities to view our IPTV service everywhere, regardless of your network speed on: Mobile / TV / Android box / PC ..
        </p>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-white uppercase">Technical Support</h2>
        <ul className="text-white font-medium">
          <li className="mb-2">
            <a href="https://wa.me/+4591426091" className="hover:underline">+982763692726</a>
          </li>
          <li className="mb-2">
            <a href="https://wa.me/+971509856234" className="hover:underline">+982763692726</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-white uppercase">Policies & Conditions</h2>
        <ul className="text-white font-medium">
          <li className="mb-2">
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="px-4 py-6 text-center bg-black-900">
      <span className="text-sm text-white">Copyright © 2024 Wish TV</span>
    </div>
  </div>
</footer>

    </>
  )
}
