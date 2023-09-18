import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Head from './assets/components/Head/Head.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Head></Head>,
  },
  {
    path:"/about",
    element: <div> I am from about page</div>
  },
  {
    path:"/contact",
    element:<div>Contact me right now ..</div>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
