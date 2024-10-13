import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function EditPlaylist() {
  const location = useLocation();
  const { playlist } = location.state || {}; 
  const [playlistName, setPlaylistName] = useState(playlist?.playlist_name || '');
  const [playlistUrl, setPlaylistUrl] = useState(playlist?.playlist_url || '');
  const [isProtected, setIsProtected] = useState(false);
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/managePlaylists/updatePlaylist', {
        id: playlist._id,
        playlist_name: playlistName,
        playlist_url: playlistUrl,
      });
      alert('Playlist updated successfully');
    } catch (error) {
      alert('Error updating playlist');
    }
  };

  return (
    <form onSubmit={handleUpdate} className="max-w-lg w-full">
      <h1 className="text-[#3C3C3C] text-3xl font-bold mb-5">Edit Playlist</h1>
      <div className="mb-5">
        <label htmlFor="playlist-name" className="block mb-2 text-sm font-medium text-gray-900">Playlist name</label>
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
        <label htmlFor="playlist-url" className="block mb-2 text-sm font-medium text-gray-900">Playlist URL</label>
        <input
          type="text"
          id="playlist-url"
          className="bg-[#F5F5F5] border-0 text-[#696CD6] text-sm rounded-lg block w-full p-2.5"
          value={playlistUrl}
          onChange={(e) => setPlaylistUrl(e.target.value)}
          required
        />
      </div>
       <center>
       <button type="submit" className="text-white bg-[#C067C8] font-medium rounded-lg text-xm w-[205px]">Edit</button>
       </center>
    </form>
  );
}
