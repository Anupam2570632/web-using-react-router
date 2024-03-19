import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path: "/contact",
        element: <div>contact</div>,
      },
      {
        path: "/about",
        element: <div>About Us</div>,
      },
      {
        path: "/blog",
        element: <div>Form blog</div>,
      },
      {
        path: "/posts",
        element: <div>posts</div>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
