import {createBrowserRouter, RouterProvider} from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import App from "./App";

export const router = createBrowserRouter([
    
  // {
  //   path: "/",
  //   element: <App />, // <-- Renders App component at the root URL "/"
  // }, 
  {
    path: "/login",
    element: <Login />,
  },{
    path: "/register",
    element: <Register />,
  },{
    path: "/",
    element: <h1>Home Page</h1>,
  }
]);