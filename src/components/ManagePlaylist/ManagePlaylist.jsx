import React, { useEffect, useState } from "react";
import styles from "./ManagePlaylist.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";




function ManagePlaylist() {
  const [playlists, setPlaylists] = useState([]);
  const [filteredPlaylists, setFilteredPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/managePlaylists/getPlaylists");
        setPlaylists(response.data);
        setFilteredPlaylists(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load playlists");
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = playlists.filter((playlist) =>
      playlist.playlist_name.toLowerCase().includes(query) ||
      playlist.playlist_url.toLowerCase().includes(query)
    );
    setFilteredPlaylists(filtered);
  };
  const handleDelete = async (playlistId) => {
    try {
      await axios.post("http://localhost:5000/api/managePlaylists/deletePlaylist", {
        id: playlistId,
      });
      setPlaylists(playlists.filter((playlist) => playlist._id !== playlistId));
      setFilteredPlaylists(filteredPlaylists.filter((playlist) => playlist._id !== playlistId));
    } catch (err) {
      setError("Failed to delete playlist");
    }
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
        <div className="pb-4 bg-white dark:bg-gray-900">
          <h1 className="text-[#3C3C3C] font-[700] text-[32px] mb-8">Manage Playlist</h1>
          <label htmlFor="table-search" className="sr-only text-[#AEB3BD]">Search</label>
          <div className="relative mt-1 flex items-center gap-3">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-[#AEB3BD] dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              value={searchQuery}
              onChange={handleSearch}
              className="block pt-2 placeholder:text-[#AEB3BD] ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-[#F5F5F5] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
            <div className="btns flex items-center">
              <button type="button" className="text-white bg-[#080808] font-medium rounded-lg text-sm px-5 py-2.5 me-2 w-36">8c:om:48:n1:ia:c6</button>
              <NavLink to="addplaylist">
                <button type="button" className="text-white bg-[#C067C8] font-medium rounded-lg text-sm px-5 py-2.5 me-2 w-32">Add Playlist</button>
              </NavLink>
            </div>
          </div>
        </div>
        {loading ? (
          <p>Loading playlists...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs rounded-2xl border text-[#4B4C4C] bg-[#F9FAFB] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Playlist</th>
                <th scope="col" className="px-6 py-3">URL</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPlaylists.map((playlist) => (
                <tr key={playlist._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4">{playlist.playlist_name}</td>
                  <td className="px-6 py-4 w-3 font-medium text-[#696CD6] dark:text-white">{playlist.playlist_url}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <NavLink to={{ pathname: "editplaylist" }} state={{ playlist }}>
                      <span className="icon-[ri--edit-2-fill] text-[#7680DE] text-lg"></span>
                    </NavLink>
                    <span
                      className="icon-[ic--baseline-delete] text-[#D40F0F] text-lg cursor-pointer"
                      onClick={() => handleDelete(playlist._id)}
                    ></span>                  
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default ManagePlaylist;
