import React, { useContext, useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 1000); 

    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading || loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-error"></span> 
      </div>
    );
  }

  return user ? children || <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
