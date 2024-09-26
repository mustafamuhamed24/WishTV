import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home/Home";
import ManagePlaylist from "./components/ManagePlaylist/ManagePlaylist";
import NotFound from "./components/NotFound/NotFound";
import LayOut from "./components/LayOut/LayOut";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const routes = createBrowserRouter([
  {path:"", element:<LayOut/>, children: [
    {index:true, element:<Home/>}, 
    {path:"manageplaylist", element:<ManagePlaylist/>}, 
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
