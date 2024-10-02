import React from "react";
import styles from "./ManagePlaylist.module.css";
import { NavLink , Link} from "react-router-dom";
import { useEffect } from "react";

function ManagePlaylist() {

    
  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
        <div class="pb-4 bg-white dark:bg-gray-900">
          <h1 className="text-[#3C3C3C] font-[700] text-[32px] mb-8">Manage Playlist</h1>
          <label for="table-search" class="sr-only text-[#AEB3BD]">
            Search
          </label>
          <div class="relative mt-1 flex items-center gap-3">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-[#AEB3BD] dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              class="block pt-2 placeholder:text-[#AEB3BD] ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-[#F5F5F5] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            /> 
            <div className="btns flex items-center">
              <button type="button" class="text-white bg-[#080808]  font-medium rounded-lg text-sm px-5 py-2.5 me-2 w-36">8c:om:48:n1:ia:c6</button>
             <NavLink to="addplaylist">
             <button type="button" class="text-white bg-[#C067C8] font-medium rounded-lg text-sm px-5 py-2.5 me-2 w-32 ">Add Playlist</button>
             </NavLink>
            </div>
          </div>
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs rounded-2xl border text-[#4B4C4C] bg-[#F9FAFB] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Playlist
              </th>
              <th scope="col" class="px-6 py-3">
                URL
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 py-4">
                Shahid
              </td>
              <th
                scope="row"
                class="px-6 py-4 w-3 font-medium text-[#696CD6] dark:text-white"
              >
                http://my4k.cc:8080/get.php username=8c:ea:48:e1:ba:c7&password=123456789123&type=m3u_plus&output=mpegts
              </th>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline flex justify-between items-center"
                >
                  <NavLink to="editplaylist">
                  <span class="icon-[ri--edit-2-fill] text-[#7680DE] text-lg"></span>
                  </NavLink>
                  <span class="icon-[ic--baseline-delete] text-[#D40F0F] text-lg"></span>
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 py-4">
                Leo
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-[#777E89] dark:text-white"
              >
               Protected
              </th>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline flex justify-between items-center"
                >
                  <span class="icon-[ri--edit-2-fill] text-[#7680DE] text-lg"></span>
                  <span class="icon-[ic--baseline-delete] text-[#D40F0F] text-lg"></span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ManagePlaylist;