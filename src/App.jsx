import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import ManagePlaylist from "./components/ManagePlaylist/ManagePlaylist";
import NotFound from "./components/NotFound/NotFound";
import LayOut from "./components/LayOut/LayOut";
import ActivateDevices from "./components/ActivateDevices/ActivateDevices";
import SwitchMac from "./components/SwitchMac/SwitchMac";
import ParentPin from "./components/ParentPin/ParentPin";
import AccountDetails from "./components/AccountDetails/AccountDetails";
import AddPlayList from "./components/AddPlayList/AddPlayList";
import EditPlaylist from "./components/EditPlaylist/EditPlaylist"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ManagePlaylistRouting from "./components/ManagePlaylistRouting/ManagePlaylistRouting";

const routes = createBrowserRouter([
  {
    path: "",
    element: <LayOut />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "manageplaylist",
        element: <ManagePlaylistRouting />,
        children: [
          { index: "manageplaylist", element: <ManagePlaylist /> },
          { path: "addplaylist", element: <AddPlayList /> },
          { path: "editplaylist", element: <EditPlaylist /> },
          { path: "activatedevices", element: <ActivateDevices /> },
          { path: "switchmac", element: <SwitchMac /> },
          { path: "parentpin", element: <ParentPin /> },
          { path: "accountdetails", element: <AccountDetails /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
