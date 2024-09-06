import PropTypes from 'prop-types';
import { useState } from 'react';

const LoginForm = ({ toggleForm }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-96 animate-fadeIn transition-transform transform duration-700 ease-out">
      <h1 className="text-3xl font-bold text-gray-600 mb-2">
        <span className="underline text-gray-700">Log in</span>
      </h1>
      <p className="text-gray-400 mb-6">Welcome back! Please log in to your account</p>

      <form>
        {/* Username Field */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 rounded-full bg-backgroundColor text-gray-700 focus:transform focus:scale-105 transition-transform duration-200 ease-in-out"
            placeholder="Enter your username"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
          <input
            type={passwordVisible ? 'text' : 'password'}
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
          <label htmlFor="showPassword" className="text-gray-700">Show Password</label>
        </div>

        {/* Remember me and Forget password */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-sm text-gray-600">Forget Password?</a>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 text-gray-700 bg-transparent border-2 border-gray-400 rounded-full hover:bg-gray-300 hover:text-white transition-transform transform hover:scale-105 duration-200 ease-in-out hover:animate-bounce">
            Log in
          </button>
        </div>
      </form>

      {/* Toggle between login and sign-up */}
      <div className="text-center mt-4">
        <p className="text-gray-600">
          Dont have an account?
          <button
            onClick={toggleForm}
            className="text-blue-500 underline ml-2 focus:outline-none"
          >
            Sign Up
          </button>
        </p>
      </div>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  toggleForm: PropTypes.func.isRequired,  // Define the expected type and that it's required
};

export default LoginForm;
