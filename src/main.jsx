import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Head from './assets/components/Head/Head.jsx';
import Home from './assets/components/Home/Home.jsx';
import Contact from './assets/components/contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Head></Head>,
    children:[
      {
        path:"/about",
        element:<Home></Home>
      },
      {
         path:"/Contact",
         element:<Contact></Contact>
      }
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
