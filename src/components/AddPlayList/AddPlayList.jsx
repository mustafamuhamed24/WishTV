import React, { useState } from 'react';
import styles from './AddPlayList.module.css';

export default function AddPlayList() {
  const [isProtected, setIsProtected] = useState(false); // State to track checkbox status
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  const handleCheckboxChange = () => {
    setIsProtected(!isProtected); // Toggle the checkbox state
  };

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleConfirmPinChange = (e) => {
    setConfirmPin(e.target.value);
  };

  return (
    <>
      <form className="max-w-lg w-full">
        <h1 className="text-[#3C3C3C] text-3xl font-bold mb-5">Add Playlist</h1>
        <div className="mb-5">
          <label htmlFor="playlist-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Playlist name
          </label>
          <input
            type="text"
            id="playlist-name"
            className="bg-[#F5F5F5] border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="playlist-url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Playlist URL
          </label>
          <input
            type="text"
            id="playlist-url"
            className="bg-[#F5F5F5] border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="protect-checkbox"
              type="checkbox" 
              className="w-4 h-4 border border-gray-300 rounded focus:bg-[#C067C8] focus:ring-3 focus:ring-[#C067C8] dark:bg-[#C067C8] dark:border-[#C067C8] dark:focus:ring-[#C067C8] dark:ring-offset-gray-800"
              onChange={handleCheckboxChange}
            />
          </div>
          <label htmlFor="protect-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Protect this playlist
          </label>
        </div>

        {isProtected && (
          <>
            <div className="mb-5">
              <label htmlFor="pin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                PIN
              </label>
              <input
                type="password"
                id="pin"
                className="bg-[#F5F5F5] border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                value={pin}
                onChange={handlePinChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="confirm-pin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Confirm PIN
              </label>
              <input
                type="password"
                id="confirm-pin"
                className="bg-[#F5F5F5] border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                value={confirmPin}
                onChange={handleConfirmPinChange}
                required
              />
            </div>
          </>
        )}

        <b className="text-[13px] block text-[#7D7E81]">
          <span className="text-red-600">NOTE :</span> Protected playlists will not be viewed or modified without entering PIN
        </b>
        <br />
        <center>
          <button type="submit" className="text-white bg-[#C067C8] font-medium rounded-lg text-xm w-[205px]">
            Save
          </button>
        </center>
      </form>
    </>
  );
}
