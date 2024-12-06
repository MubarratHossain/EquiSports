import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar />

      
      <ToastContainer position="top-center" />

      
      <main className="flex-grow">
        <Outlet />
      </main>

      
      <Footer />
    </div>
  );
}

export default App;

