import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

function ManagePlaylistRouting() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="mx-21 my-24">
      <div className="container mt-21 flex justify-center items-start gap-32">
        <nav id="sideBar" className="bg-black text-white rounded">
          <ul className="text-[18px] font-[600]">
            <li>
              <NavLink
                to="/manageplaylist"
                className={({ isActive }) =>
                  isActive ? "Active " : "NonActive"
                }
              >
                <span className="iconColor icon-[mdi--view-dashboard-edit-outline] text-2xl shrink-0"></span>
                <span className="listTitle">Manage Playlist</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="activatedevices"
                className={({ isActive }) =>
                  isActive ? "Active " : "NonActive"
                }
              >
                <span className="icon-[icon-park-outline--play] text-2xl shrink-0"></span>
                <span className="listTitle">Activate Devices</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="switchmac"
                className={({ isActive }) =>
                  isActive ? "Active " : "NonActive"
                }
              >
                <span className="icon-[mi--switch] text-2xl shrink-0"></span>
                <span className="listTitle">Switch Mac</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="parentpin"
                className={({ isActive }) =>
                  isActive ? "Active " : "NonActive"
                }
              >
                <span className="icon-[ri--parent-line] text-2xl shrink-0"></span>
                <span className="listTitle">Parent Pin</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="accountdetails"
                className={({ isActive }) =>
                  isActive ? "Active " : "NonActive"
                }
              >
                <span className="icon-[iconamoon--profile] text-2xl shrink-0"></span>
                <span className="listTitle">Account Details</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleLogout}
                className={({ isActive }) =>
                  isActive ? "Active " : "NonActive"
                }
                to={"/"}
              >
                <span className="icon-[tabler--logout-2] text-2xl shrink-0"></span>
                <span className="listTitle">Logout</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default ManagePlaylistRouting;
