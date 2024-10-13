import React, { useState, useEffect } from 'react';

export default function AddPlayList({ playlistId, initialPlaylistName, initialPlaylistUrl }) {
  const [isProtected, setIsProtected] = useState(false);
  const [playlistName, setPlaylistName] = useState(initialPlaylistName || '');
  const [playlistUrl, setPlaylistUrl] = useState(initialPlaylistUrl || '');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  
  useEffect(() => {
    setPlaylistName(initialPlaylistName || '');
    setPlaylistUrl(initialPlaylistUrl || '');
  }, [initialPlaylistName, initialPlaylistUrl]);

  const handleCheckboxChange = () => {
    setIsProtected(!isProtected);
  };

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleConfirmPinChange = (e) => {
    setConfirmPin(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      playlist_name: playlistName,
      playlist_url: playlistUrl,
    };

    const apiUrl = playlistId
      ? 'http://localhost:5000/api/managePlaylists/updatePlaylist'
      : 'http://localhost:5000/api/managePlaylists/createPlaylist';

    if (playlistId) {
      requestData.id = playlistId;
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();
      console.log('API Response:', result);
      if (response.ok) {
        alert(playlistId ? 'Playlist updated successfully!' : 'Playlist created successfully!');
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error processing request:', error);
      alert('An error occurred while processing your request.');
    }
  };

  return (
    <form className="max-w-lg w-full" onSubmit={handleFormSubmit}>
      <h1 className="text-[#3C3C3C] text-3xl font-bold mb-5">{playlistId ? 'Edit Playlist' : 'Add Playlist'}</h1>
      <div className="mb-5">
        <label htmlFor="playlist-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Playlist name
        </label>
        <input
          type="text"
          id="playlist-name"
          className="bg-[#F5F5F5] border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
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
          value={playlistUrl}
          onChange={(e) => setPlaylistUrl(e.target.value)}
          required
        />
      </div>
      {/* ... Rest of your form */}
      <center>
        <button type="submit" className="text-white bg-[#C067C8] font-medium rounded-lg text-xm w-[205px]">
          {playlistId ? 'Update' : 'Add Playlist'}
        </button>
      </center>
    </form>
  );
}
