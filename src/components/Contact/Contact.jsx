import React, { useEffect, useState } from 'react'
import styles from './Contact.module.css';
import contactUs from '../../assets/Image/Contact.jfif'
export default function Contact() {

    let [count,setCount] = useState(0)
    useEffect(() => {},[])
    return (
      <>
<section className="min-h-screen relative flex items-center justify-center z-10" id='contact'>
  {/* Background Image with Blur */}
  
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${contactUs})`, // Replace with your background image URL or variable
      filter: 'blur(4px)', // Apply the blur effect here
      zIndex: '-1', // Ensure the background is behind the content
    }}
  ></div>

  {/* Translucent Overlay */}
  <div className="absolute inset-0 bg-black opacity-60"></div>

  {/* Contact Form */}
  <div className="relative bg-[#00000071]  shadow-lg rounded-lg p-8 w-full max-w-md">
  <h1 className=" z-50 text-2xl text-center font-bold text-white mb-6">
      Contact Us
    </h1>
    <h2 className="text-white text-lg mb-4">Send Us a Message</h2>

    {/* Form */}
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full px-4 py-2 bg-white rounded-md outline-none border border-gray-300 focus:border-purple-500"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 bg-white rounded-md outline-none border border-gray-300 focus:border-purple-500"
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full px-4 py-2 bg-white rounded-md outline-none border border-gray-300 focus:border-purple-500"
      />
      <textarea
        rows="4"
        placeholder="Your message..."
        className="w-full px-4 py-2 bg-white rounded-md outline-none border border-gray-300 focus:border-purple-500"
      ></textarea>
      <button
        type="submit"
        className="w-full py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
      >
        Send message
      </button>
    </form>
  </div>
</section>
</>
    );
}
