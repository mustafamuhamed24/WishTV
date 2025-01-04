import React, { useEffect, useState } from 'react'
import styles from './Footer.module.css';

export default function Footer() {

  let [count, setCount] = useState(0)
  useEffect(() => { }, [])
  return (
    <>
      <footer className="bg-black text-white py-8 px-6">
        <div className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0">
          <div className="md:w-1/3">
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="max-w-md">
              Wish tv offer all image qualities to view our iptv service everywhere, regardless of your network speed on: Mobile / TV / Android box / PC ..
            </p>
          </div>
          <div className={styles.technicalSupport}>
            <h2 className="text-xl font-bold mb-4">Policies & Conditions</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          {/* <div>
            <h2 className="text-xl font-bold mb-4">Policies & Conditions</h2>
            <ul className={`${styles.policy} space-y-2`}>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div> */}
        </div>
        <div className="mt-8 text-center">
          <p>Copyright © 2024 Wish tv</p>
        </div>
      </footer>
    </>
  )
}
