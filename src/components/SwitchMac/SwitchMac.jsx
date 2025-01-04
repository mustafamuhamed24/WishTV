import React, { useEffect, useState } from 'react';
import styles from './SwitchMac.module.css';

export default function SwitchMac() {
    const [mac_address, setMacAddress] = useState(''); // State for the new MAC address
    const [id, setId] = useState('66fadc1e68f2aa11843053be'); // Set this to your device ID

    // Effect to run on component mount (if needed)
    useEffect(() => {}, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        const body = {
            id: id,
            mac_address: mac_address
        };

        try {
            const response = await fetch('http://62.182.85.163:5053/api/devices/updateMac', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok', response);
            }

            const data = await response.json();
            console.log('Success:', data);
            setMacAddress('') 
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <form className="max-w-lg w-full" onSubmit={handleSubmit}>
                <h1 className="text-[#3C3C3C] text-3xl font-bold mb-5">Switch Device MAC</h1>

                <p className='text-[#3C3C3C] font-medium'>Transfer your activation and playlists to another device MAC Address</p>
                <div className="mb-5 mt-10">
                    <label htmlFor="new-mac" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        New MAC Address <span className='text-[#a1a1a1]'>Max length: 17</span>
                    </label>
                    <input
                        type="text"
                        id="new-mac"
                        value={mac_address}
                        onChange={(e) => setMacAddress(e.target.value)} // Update state on change
                        className="bg-[#F5F5F5] border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        required
                        maxLength={17}
                    />
                </div>
                <b className="text-[13px] block text-[#7D7E81]">
                    <span className="text-red-600">NOTE:</span> Your device login information, playlists, and activation period shall be transferred to this new device MAC address. Your old MAC address device will no longer be attached to this account.
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
