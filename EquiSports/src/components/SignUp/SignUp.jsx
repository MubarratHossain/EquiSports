import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Swal from "sweetalert2"; 
import { AuthContext } from "../../providers/Authprovider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, photoURL, password } = formData;

    if (!validatePassword(password)) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      await createUser(email, password, name, photoURL); 

      Swal.fire({
        title: "Success!",
        text: "Account created successfully. Redirecting to the Home page...",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/"); 
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-center">Sign Up</h2>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="photoURL"
              placeholder="Photo URL"
              className="input input-bordered"
              value={formData.photoURL}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="input input-bordered"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit" disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
