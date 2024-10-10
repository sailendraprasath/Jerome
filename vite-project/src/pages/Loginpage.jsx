import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userData from "../lib/user.json"; // Import your data.json

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize localStorage with data from data.json (if not already initialized)
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (!storedUsers) {
      localStorage.setItem("users", JSON.stringify(userData.user)); // Load data.json users into localStorage
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Fetch existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user exists
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Login successful, store only the user ID
      localStorage.setItem("userId", user.id); // Save only user ID
      setErrorMessage("");
      navigate("/home");
    } else {
      // Login failed
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Dont have an account?{" "}
          <a href="/register" className="text-blue-500">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
