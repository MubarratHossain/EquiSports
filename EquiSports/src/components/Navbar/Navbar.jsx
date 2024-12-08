import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";
import { AiOutlineHome, AiOutlineShop, AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";
import { MdSportsSoccer, MdAdd, MdPerson } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const logos = [
        "https://i.postimg.cc/3r6mhCw6/ball.png",
        "https://i.ibb.co.com/gWTBvgr/8193268.png",
        "https://i.ibb.co.com/3STszST/sports-logo-C3-C4-FD95-D9-seeklogo-com.png",
      ];

      const [currentLogo, setCurrentLogo] = useState(logos[0]);


      useEffect(() => {
        const logoInterval = setInterval(() => {
          
          setCurrentLogo((prevLogo) => {
            const currentIndex = logos.indexOf(prevLogo);
            const nextIndex = (currentIndex + 1) % logos.length;
            return logos[nextIndex];
          });
        }, 2000);
    
        
        return () => clearInterval(logoInterval);
      }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        const theme = !isDarkMode ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);
        setIsDarkMode(savedTheme === "dark");
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            console.log("Logged out successfully");
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    return (
        <div className="navbar bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 shadow-lg transform hover:transition mt-1 rounded-lg z-50 relative">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white text-black rounded-box z-50 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <Link to="/" className="hover:bg-red-200 rounded">
                                <AiOutlineHome className="inline mr-2" />
                                Home
                            </Link>
                        </li>
                        <li tabIndex={0}>
                            <a className="hover:bg-red-200 rounded">
                                <MdSportsSoccer className="inline mr-2" />
                                Equipment
                            </a>
                            <ul className="p-2 bg-white rounded shadow">
                                <li>
                                    <Link to="/addProduct" className="hover:bg-red-200 rounded">
                                        <MdAdd className="inline mr-2" />
                                        Add Equipment
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/myItems" className="hover:bg-red-200 rounded">
                                        <MdPerson className="inline mr-2" />
                                        My Equipment
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/store" className="hover:bg-red-200 rounded">
                                <AiOutlineShop className="inline mr-2" />
                                Store
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="text-xl flex items-center gap-2">
                    <img
                        src={currentLogo}
                        alt="Sports Ball Logo"
                        className="h-5 w-5 animate-bounceSlow"
                    />
                    EquiSports
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/" className="hover:bg-red-200 rounded">
                            <AiOutlineHome className="inline mr-2" />
                            Home
                        </Link>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary className="hover:bg-red-200 rounded">
                                <MdSportsSoccer className="inline mr-2" />
                                Equipment
                            </summary>
                            <ul className="p-2 bg-white text-black rounded shadow">
                                <li>
                                    <Link to="addProduct" className="hover:bg-red-200 rounded">
                                        <MdAdd className="inline mr-2" />
                                        Add Equipment
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/myItems" className="hover:bg-red-200 rounded">
                                        <MdPerson className="inline mr-2" />
                                        My Equipment
                                    </Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link to="/store" className="hover:bg-red-200 rounded">
                            <AiOutlineShop className="inline mr-2" />
                            Store
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <button
                    className="btn btn-xs text-xs lg:btn-sm lg:text-sm flex items-center gap-1"
                    onClick={toggleTheme}
                >
                    {isDarkMode ? (
                        <>
                            <BsSun className="inline" />

                        </>
                    ) : (
                        <>
                            <BsMoon className="inline" />

                        </>
                    )}
                </button>
                {!user ? (
                    <>
                        <Link to="/signin">
                            <button className="btn btn-xs text-xs lg:btn-sm lg:text-sm flex items-center gap-1">
                                <AiOutlineLogin className="inline" />
                                Sign in
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="btn btn-xs text-xs lg:btn-sm lg:text-sm flex items-center gap-1">
                                <AiOutlineUserAdd className="inline" />
                                Sign up
                            </button>
                        </Link>
                    </>
                ) : (
                    <div className="flex items-center gap-2 lg:gap-3">
                        {user.photoURL && (
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
                                <img
                                    src={user.photoURL}
                                    alt={user.displayName || "User"}
                                    className="h-8 w-8 lg:h-10 lg:w-10 rounded-full"
                                />
                            </div>
                        )}
                        <button
                            className="btn btn-xs text-xs lg:btn-sm lg:text-sm flex items-center gap-1"
                            onClick={handleLogout}
                        >
                            <AiOutlineLogout />
                            Log Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
