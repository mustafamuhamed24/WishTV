import React from "react";
import { Outlet, Link } from "react-router-dom";

function ManagePlaylistRouting() {
  return (
    <>
      <nav>
        <ul>
           <li>
            <Link to="manageplaylist">Manage Playlist</Link>
          </li>
          <li>
            <Link to="activatedevices">Activate Devices</Link>
          </li>
          <li>
            <Link to="switchmac">Switch Mac</Link>
          </li>
          <li>
            <Link to="parentpin">Parent Pin</Link>
          </li>
          <li>
            <Link to="accountdetails">Account Details</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default ManagePlaylistRouting;
