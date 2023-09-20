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
import UserDetals from './assets/components/UserDetals/UserDetals.jsx';

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
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users	'),
        element:<Users></Users>
      },
      {
        path:'/user/:userid',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        element: <UserDetals></UserDetals>
      }

    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
