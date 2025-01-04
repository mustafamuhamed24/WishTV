import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddPlayList({ playlistId, initialPlaylistName, initialPlaylistUrl }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    playlistName: initialPlaylistName || '',
    playlistUrl: initialPlaylistUrl || '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      playlistName: initialPlaylistName || '',
      playlistUrl: initialPlaylistUrl || ''
    }));
  }, [initialPlaylistName, initialPlaylistUrl]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    if (!formData.playlistName.trim()) {
      setError('Playlist name is required');
      return false;
    }
    if (!formData.playlistUrl.trim()) {
      setError('Playlist URL is required');
      return false;
    }
    if (formData.isProtected && !formData.password) {
      setError('Password is required for protected playlists');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const requestData = {
      name: formData.playlistName,
      url: formData.playlistUrl,
      isProtected: formData.isProtected,
      ...(formData.isProtected && { password: formData.password }),
      ...(playlistId && { id: playlistId })
    };

    const apiUrl = playlistId
      ? 'http://62.182.85.163:5053/api/managePlaylists/updatePlaylist'
      : 'https://wish-4a54.onrender.com/playList/add';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `wisOZ0${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify(requestData)
      });

      const result = await response.json();

      if (response.ok) {
        navigate('/manageplaylist');
      } else {
        setError(result.message || 'Failed to save playlist');
      }
    } catch (err) {
      setError('An error occurred while processing your request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-[#3C3C3C] mb-6">
          {playlistId ? 'Edit Playlist' : 'Add Playlist'}
        </h1>

        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="playlistName" className="block text-sm font-medium text-gray-700 mb-1">
              Playlist Name
            </label>
            <input
              type="text"
              id="playlistName"
              name="playlistName"
              value={formData.playlistName}
              onChange={handleInputChange}
              className="w-full bg-[#F5F5F5] rounded-lg px-4 py-2.5 text-gray-900"
              placeholder="Enter playlist name"
            />
          </div>

          <div>
            <label htmlFor="playlistUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Playlist URL
            </label>
            <input
              type="text"
              id="playlistUrl"
              name="playlistUrl"
              value={formData.playlistUrl}
              onChange={handleInputChange}
              className="w-full bg-[#F5F5F5] rounded-lg px-4 py-2.5 text-gray-900"
              placeholder="Enter playlist URL"
            />
          </div>

          <div className="flex flex-col items-start">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="isProtected"
                checked={formData.isProtected}
                onChange={handleInputChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C067C8]"></div>
              <span className="ms-3 text-sm font-medium text-gray-700">Protected Playlist</span>
            </label><br />
            <b className="text-[13px] block text-[#7D7E81]">
                    <span className="text-red-600">NOTE:</span> Protected playlists will not be viewed or modified without entering PIN
                </b>
          </div>

          {formData.isProtected && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-[#F5F5F5] rounded-lg px-4 py-2.5 text-gray-900"
                placeholder="Enter password"
              />
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`
                w-full sm:w-auto min-w-[200px] bg-[#C067C8] text-white font-medium rounded-lg px-8 py-2.5
                ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#C067C8]/90'}
              `}
            >
              {loading ? 'Saving...' : playlistId ? 'Update Playlist' : 'Add Playlist'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/manageplaylist')}
              className="w-full sm:w-auto min-w-[200px] bg-gray-100 text-gray-600 font-medium rounded-lg px-8 py-2.5 hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

