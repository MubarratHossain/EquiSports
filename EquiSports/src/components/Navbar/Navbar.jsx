import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            await logout();
            console.log("Logged out successfully");
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li>
                            <a>Equipment</a>
                            <ul className="p-2">
                                <li><a>Add Equipment</a></li>
                                <li><a>My Equipment</a></li>
                            </ul>
                        </li>
                        <li><a>Store</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">EquiSports</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li>
                        <details>
                            <summary>Equipment</summary>
                            <ul>
                                <li>
                                    <Link to="">Add Equipment</Link>
                                </li>
                                <li>
                                    <Link to="">My Equipment</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Store</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {!user ? (
                    <>
                        <Link to="/signin">
                            <button className="btn btn-sm text-sm">Sign in</button>
                        </Link>
                        <Link to="/signup">
                            <button className="btn btn-sm text-sm">Sign up</button>
                        </Link>
                    </>
                ) : (
                    <div className="flex items-center gap-3">
                        {user.photoURL && (
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
                                <img
                                    src={user.photoURL}
                                    alt={user.displayName || "User"}
                                    className="h-10 w-10 rounded-full"
                                />
                            </div>
                        )}
                        
                        <button
                            className="btn btn-sm text-sm"
                            onClick={handleLogout}
                        >
                            Log Out
                        </button>
                    </div>

                )}
            </div>
        </div>
    );
};

export default Navbar;
