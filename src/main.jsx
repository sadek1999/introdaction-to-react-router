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
import Users from './assets/components/users/Users.jsx';
import About from './assets/components/about/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:"/about",
        element:<About></About>
      },
      {
         path:"/contact",
         element:<Contact></Contact>
      },
      {
        path:'/Users',
        element:<Users></Users>
      }
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
