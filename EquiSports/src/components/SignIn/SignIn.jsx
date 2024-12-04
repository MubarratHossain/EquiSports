import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/Authprovider";

const SignIn = () => {
  const { signIn, signInWithGoogle, setLoading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      setLoading(true);
      await signIn(email, password); 
      console.log("User signed in successfully!");

      
      Swal.fire({
        title: "Login Successful!",
        text: "You have successfully logged in.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/"); 
      });
    } catch (err) {
      setError(err.message);
      
      
      toast.error("Incorrect email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    try {
      setLoading(true);
      await signInWithGoogle(); 
      console.log("Google sign-in successful!");

      
      Swal.fire({
        title: "Login Successful!",
        text: "You have successfully logged in with Google.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/"); 
      });
    } catch (err) {
      setError(err.message);

      
      toast.error("Something went wrong with Google sign-in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign in now!</h1>
          <p className="py-6">
            Access your account quickly and securely. Sign in to explore all our features and stay connected.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSignIn}>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">Sign in</button>
            </div>
            <div className="divider">OR</div>
            <div className="form-control">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-neutral flex items-center justify-center"
              >
                <img
                  src="https://i.postimg.cc/7PGLpgV5/download.png"
                  alt="Google"
                  className="w-8 h-8 rounded-full bg-black"
                />
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
