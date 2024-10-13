import React, { useEffect, useState } from 'react'
import styles from './ActivateDevices.module.css';

export default function ActivateDevices() {

    let [count,setCount] = useState(0)
    useEffect(() => {},[])
  return (
    <>
       <div className="max-w-lg w-full">
        <h1 className="text-[#3C3C3C] text-3xl font-bold mb-5">Activate Device</h1>
        <div className="mb-5">
        <h1 className="text-[#4548AC] text-2xl font-medium mb-5">Price : 20$ </h1>
        </div>
        <div className="flex flex-col items-start mb-5">
           <h1 className="text-[#3C3C3C] text-2xl font-medium mb-5">Payment method</h1>
           <div className='flex items-center gap-7'>
            <a href="#">
            <img className='border py-2 px-3 rounded-2xl' src="/src/assets/Image/Stripe-Logo 1.png" alt="" srcset="" />
            </a>
            <a href="#">
            <img className='border px-3 rounded-2xl' src="/src/assets/Image/paypal-logo-0 1.png" alt="" srcset="" />
            </a>
           </div>
        </div>

        <b className="text-[13px] block text-[#7D7E81]">
          <span className="text-red-600">NOTE : </span>wish tv does not provide contents and it is pure media player. To use wish tv, you have to upload your own playlist. If you don’t have playlist, then you can't use wish player anymore so in this case don’t pay. Also we are not allowing activation for the users that don't have playlis.
        </b>
      </div>
    </>
  )
}
