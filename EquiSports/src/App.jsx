import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';




function App() {
 

  return (
  <div>
    <Navbar></Navbar>
    <ToastContainer position="top-center"/>
    <Outlet></Outlet>
    <Footer></Footer>
  </div>
  )
}

export default App
