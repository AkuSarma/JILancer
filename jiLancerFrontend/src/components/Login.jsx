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
    <div className="h-full flex justify-center items-center bg-lastColor rounded-lg py-10 px-8 my-4">
      {/* Log in section */}
      <div className="w-1/2 h-full bg-primaryColor rounded-r-lg flex flex-col justify-center items-center rounded-lg mx-2">
        <h2 className="text-2xl font-semibold text-white">Log in</h2>
        <button className="text-white mt-4" onClick={toggleForm}>
          {" "}
          {/* Use toggleForm */}
          Don't have an account? Signup
        </button>
      </div>
      {/* Login form section */}
      <div className="w-1/2 p-10 flex flex-col justify-center bg-white text-primaryColor rounded-lg mx-2">
        <h2 className="text-3xl font-bold text-green-800">Log in</h2>
        <p className="text-green-600 mb-6">
          Welcome back! Please login to your account
        </p>
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded-full bg-primaryColor focus:outline-primaryColor focus:bg-white text-white focus:text-lastColor"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 rounded-full bg-primaryColor focus:outline-primaryColor focus:bg-white text-white focus:text-lastColor"
            onChange={(e) => setPassword(e.target.value)}
          />
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
