import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home/Home";
import ManagePlaylist from "./components/ManagePlaylist/ManagePlaylist";
import NotFound from "./components/NotFound/NotFound";
import LayOut from "./components/LayOut/LayOut";
import ActivateDevices from "./components/ActivateDevices/ActivateDevices"
import SwitchMac from "./components/SwitchMac/SwitchMac"
import ParentPin from "./components/ParentPin/ParentPin"
import AccountDetails from "./components/AccountDetails/AccountDetails"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ManagePlaylistRouting from "./components/ManagePlaylistRouting/ManagePlaylistRouting";



const routes = createBrowserRouter([
  {path:"", element:<LayOut/>, children: [
    {index:true, element:<Home/>}, 
    { 
      path: "manageplaylistrouting", 
      element: <ManagePlaylistRouting />,
      children: [
        { path: "manageplaylist", element: <ManagePlaylist /> }, 
        { path: "activatedevices", element: <ActivateDevices /> }, 
        { path: "switchmac", element: <SwitchMac /> }, 
        { path: "parentpin", element: <ParentPin /> }, 
        { path: "accountdetails", element: <AccountDetails /> }, 
      ]
    },
    {path:"*", element:<NotFound/>},
  ]}
]) 


function App() { 
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;