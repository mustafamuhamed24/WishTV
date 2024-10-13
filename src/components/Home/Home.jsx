import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './Home.module.css';
import wishTv from '../../assets/Image/wishtv .jpg';
import samsung from '../../assets/Image/samsung.png';
import android from '../../assets/Image/android.png';
import lg from '../../assets/Image/lg.png';
import sony from '../../assets/Image/sony.png';
import About from '../About/About';
import Faqs from '../Faqs/Faqs';
import Contact from '../Contact/Contact';
import windows from '../../assets/Image/windows.png';
import apple from '../../assets/Image/apple.png';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [macAddress, setMacAddress] = useState('');
  const [deviceKey, setDeviceKey] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        mac_address: macAddress,
        device_key: deviceKey,
      });

      if (response.status === 200) {
        // Login successful, update the state to show the additional navbar item
        setIsLoggedIn(true);
        const fakeToken = 'your_auth_token'; // Replace this with the actual token from your API
        localStorage.setItem('authToken', fakeToken); // Store token in localStorage
        setIsLoggedIn(true); // Update logged-in state
        alert('Login successful!');
        window.location.reload();
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please try again.');
    }
  };
    // This function checks the authentication status
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      return token ? true : false;
    };

    useEffect(() => {
      // Check if the user is logged in when the component mounts
      const loggedIn = checkAuth();
      setIsLoggedIn(loggedIn);
    }, []);

  return (
    <>

      <section className={classes.home}>
        <div className="text-white h-auto lg:h-screen p-6 lg:p-20">
          <h1 className="text-2xl lg:text-3xl text-center my-3">Manage Your Playlist</h1>

          <div className={`${classes.macaddres} mt-8 `}>
            <form onSubmit={handleLogin} id="login-form" className="max-w-xs lg:max-w-sm mx-auto rounded-sm p-6">
              <h1 className="text-lg lg:text-2xl mb-5 text-center">Login to add your playlist</h1>

              <div className="mb-5">
                <label htmlFor="macAddress" className="block mb-2 text-sm lg:text-base text-white">MAC ADDRESS</label>
                <input
                  type="text"
                  id="macAddress"
                  value={macAddress}
                  onChange={(e) => setMacAddress(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="deviceKey" className="block mb-2 text-sm lg:text-base text-white">DEVICE KEY</label>
                <input
                  type="text"
                  id="deviceKey"
                  value={deviceKey}
                  onChange={(e) => setDeviceKey(e.target.value)}
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

          <div>
            <h1 className="text-3xl lg:text-4xl text-[#B269B9] font-bold text-center">WishTv</h1>
            <p className="text-sm lg:text-2xl max-w-3xl mx-auto">
              Our platform is the hub for entertainment solutions, boasting an extensive collection of streaming technologies
              and thoughtfully curated content.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full h-screen" style={{ backgroundImage: `url(${wishTv})` }}>
      </section>

      <section className="bg-black py-20 text-center overflow-hidden">
        <h3 className="text-white mb-8 text-lg lg:text-2xl">
          Watch Wish TV with these compatible streaming devices
        </h3>
        <div className={classes.marqueeWrapper}>
          <div className={`${classes.marqueeContent} flex space-x-8 justify-center items-center`}>
            <img src={samsung} className="w-40 lg:w-64 mx-4" alt="Samsung" />
            <img src={android} className="w-40 lg:w-40 h-[3rem] mx-4" alt="Android" />
            <img src={lg} className="w-32 lg:w-32 mx-4" alt="LG" />
            <img src={sony} className="w-40 lg:w-48 mx-4" alt="Sony" />
            <img src={windows} className="w-40 lg:w-48 mx-4" alt="Windows" />
            <img src={apple} className="w-40 lg:w-40 mx-4" alt="Apple" />
          </div>
        </div>
      </section>

      <About />
      <Faqs />
      <Contact />
    </>
  );
}
