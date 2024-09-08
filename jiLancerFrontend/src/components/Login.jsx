import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ toggleForm }) => {
  // Make sure to use `toggleForm` here
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const loginUser = async (username, password) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/user_authentication/token/",
        {
          username,
          password,
        }
      );

      const { refresh, access } = response.data;
      // Store tokens in local storage or cookies
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/user_authentication/login/",
        {
          username,
          password,
        }
      );
      console.log("Login successful:", response.data);
      loginUser(username, password);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-96 animate-fadeIn transition-transform transform duration-700 ease-out">
        <h1 className="text-3xl font-bold text-gray-600 mb-2">
          <span className="underline text-gray-700">Log in</span>
        </h1>
        <p className="text-gray-400 mb-6">
          Welcome back! Please log in to your account
        </p>

        <form onSubmit={handleLogin}>
          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 rounded-full bg-backgroundColor text-gray-700 focus:transform focus:scale-105 transition-transform duration-200 ease-in-out"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className="w-full px-4 py-2 rounded-full bg-backgroundColor text-gray-700 focus:transform focus:scale-105 transition-transform duration-200 ease-in-out"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Show password checkbox */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="showPassword"
              className="mr-2"
              checked={passwordVisible}
              onChange={togglePasswordVisibility}
            />
            <label htmlFor="showPassword" className="text-gray-700">
              Show Password
            </label>
          </div>
          <button
            type="submit"
            className="mt-4 bg-primaryColor hover:bg-green-500 text-white p-3 rounded-full w-full"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  toggleForm: PropTypes.func.isRequired, // Define the expected type and that it's required
};

export default LoginForm;
