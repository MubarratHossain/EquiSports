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
import AddProduct from './components/AddProduct/AddProduct.jsx';
import PrivateRoute from './components/Privateroute/Privateroute.jsx';
import Store from './components/Store/Store.jsx';
import StoreDetails from './components/Storedetails/StoreDetails.jsx';
import MyItems from './components/MyItems/MyItems.jsx';
import UpdateProduct from './components/Updateproduct/UpdateProduct.jsx';
import ErrorPage from './components/Errorpage/Errorpage.jsx';



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
      },
      {
        path:"/addProduct",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path:"/store",
        element:<Store></Store>,
      },
      {
        path:"/equipment-details/:id",
        element:<PrivateRoute><StoreDetails></StoreDetails></PrivateRoute>,
      },
      {
        path:"/myItems",
        element:<PrivateRoute><MyItems></MyItems></PrivateRoute>,
      },
      {
        path:"/update/:itemId",
        element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
      }, {
        path: "*", 
        element: <ErrorPage></ErrorPage>,
      },

     
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
