import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = ({ toggleForms }) => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [isFreelancer, setIsFreelancer] = useState(false);

   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       const response = await axios.post(
         "http://localhost:8000/user_authentication/register/",
         {
           username,
           email,
           password,
           is_freelancer: isFreelancer,
         }
       );
       navigate("Auth?=true");
       console.log("Registration successful:", response.data);
     } catch (error) {
       console.error("Error during registration:", error);
     }
   };

  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-96 animate-fadeIn transition-transform transform duration-700 ease-out">
        <h1 className="text-3xl font-bold text-gray-600 mb-2">
          <span className="underline text-gray-700">Sign Up</span>
        </h1>
        <p className="text-gray-400 mb-6">
          Create a new account to get started
        </p>

        <form onSubmit={handleSubmit}>
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

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-full bg-backgroundColor text-gray-700 focus:transform focus:scale-105 transition-transform duration-200 ease-in-out"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
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

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className="w-full px-4 py-2 rounded-full bg-backgroundColor text-gray-700 focus:transform focus:scale-105 transition-transform duration-200 ease-in-out"
              placeholder="Enter your password"
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

          {/* is Freelancer Field */}
          <div className="mb-4">
            <label htmlFor="isFreelancer" className="block text-gray-700 mb-2">
              Are you a freelancer?
            </label>
            <input
              id="isFreelancer"
              className="w-full px-4 py-2 rounded-full bg-backgroundColor text-gray-700 focus:transform focus:scale-105 transition-transform duration-200 ease-in-out"
              type="checkbox"
              checked={isFreelancer}
              onChange={() => setIsFreelancer(!isFreelancer)}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 text-gray-700 bg-transparent border-2 border-gray-400 rounded-full hover:bg-gray-300 hover:text-white transition-transform transform hover:scale-105 duration-200 ease-in-out hover:animate-bounce"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Toggle between sign-up and login */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already have an account?
            <button
              onClick={toggleForms}
              className="text-blue-500 underline ml-2 focus:outline-none"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  toggleForms: PropTypes.func.isRequired,  // Define the expected type and that it's required
};

export default SignUp;
