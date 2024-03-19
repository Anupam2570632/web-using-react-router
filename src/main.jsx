import React, { children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Country from './components/Country/Country.jsx';
import Details from './components/Details/Details.jsx';

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
        path: "/countries",
        loader: () => fetch('https://restcountries.com/v3.1/all'),
        element: <Country></Country>
      },
      {
        path: "/blog",
        element: <div>Form blog</div>,
      },
      {
        path: "/posts",
        element: <div>posts</div>,
      },
      {
        path: "/country/:capital",
        loader: ({params})=> fetch(`https://restcountries.com/v3.1/capital/${params.capital}`),
        element: <Details></Details>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
