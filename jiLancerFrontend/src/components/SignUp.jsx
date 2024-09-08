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
       navigate("Auth");
       console.log("Registration successful:", response.data);
     } catch (error) {
       console.error("Error during registration:", error);
     }
   };

  return (
<<<<<<< HEAD
    <div className="h-[100%] bg-gray-600 flex items-center justify-center p-10 mx-40 my-10 border- rounded-3xl">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-96 animate-fadeIn transition-transform transform duration-700 ease-out">
        <h1 className="text-3xl font-bold text-gray-600 mb-2">
          <span className="underline text-gray-700">Sign Up</span>
        </h1>
        <p className="text-gray-400 mb-6">
          Create a new account to get started
=======
    <div className="h-full flex justify-center items-center bg-lastColor rounded-lg py-10 px-8 my-4">
      {/* Sign up section */}
      <div className="w-1/2 p-10 flex flex-col justify-center bg-white text-primaryColor rounded-lg mx-2">
        <h2 className="text-3xl font-bold text-green-800">Sign up</h2>
        <p className="text-green-600 mb-6">
          Welcome back! Please login to your account
>>>>>>> e8cd470ef3be8331219cadec0c4e5ae48fe1ffe2
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded-full bg-primaryColor focus:outline-primaryColor focus:bg-white text-white focus:text-lastColor"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-full bg-primaryColor focus:outline-primaryColor focus:bg-white text-white focus:text-lastColor"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 rounded-full bg-primaryColor focus:outline-primaryColor focus:bg-white text-white focus:text-lastColor"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Confirm password"
            className="w-full p-3 rounded-full bg-primaryColor focus:outline-primaryColor focus:bg-white text-white focus:text-lastColor"
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
          <button
            type="submit"
            className="mt-4 bg-primaryColor hover:bg-green-500 text-white p-3 rounded-full w-full"
          >
            Sign up
          </button>
        </form>
      </div>
      {/* Log in section */}
      <div className="w-1/2 h-full bg-primaryColor rounded-r-lg flex flex-col justify-center items-center rounded-lg mx-2">
        <h2 className="text-2xl font-semibold text-white">Log in</h2>
        <button className="text-white mt-4" onClick={toggleForms}>
          Already a member? Log in
        </button>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  toggleForms: PropTypes.func.isRequired,  // Define the expected type and that it's required
};

export default SignUp;
