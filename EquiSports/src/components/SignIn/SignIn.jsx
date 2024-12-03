import React, { useContext, useState } from "react";

import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

import { AuthContext } from "../../providers/Authprovider";
import { auth } from "../../firebase/firebase.init";

const SignIn = () => {
  const { setLoading } = useContext(AuthContext); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in user:", result.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google signed in user:", result.user);
    } catch (err) {
      setError(err.message);
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
              <button className="btn btn-primary">Sign in</button>
            </div>
            <div className="divider">OR</div>
            <div className="form-control">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-neutral flex items-center justify-center"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                  alt="Google"
                  className="w-6 h-6 mr-2"
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
