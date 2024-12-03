import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './components/SignIn/SignIn.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import Home from './components/Home/Home.jsx';
import Authprovider from './providers/Authprovider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,


    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"/signin",
        element:<SignIn></SignIn>,
      },
      {
        path:"signup",
        element:<SignUp></SignUp>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
