import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RoleIdentifier from "./RoleIdentifier";
import { RingLoader } from "react-spinners"; // Import the spinner

const SignUp = ({ toggleForms }) => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [details, setDetails] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage loading

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (details) {
    return (
      <RoleIdentifier
        username={username}
        email={email}
        password={password}
        setDetails={setDetails}
      />
    );
  } else {
    return (
      <div className="h-full flex justify-center items-center bg-lastColor rounded-lg py-10 px-8 my-4">
        {/* Sign up section */}
        <div className="w-1/2 p-10 flex flex-col justify-center bg-white text-primaryColor rounded-lg mx-2">
          <h2 className="text-3xl font-bold text-green-800">Sign up</h2>
          <p className="text-green-600 mb-6">
            Welcome back! Please register for a new account
          </p>
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <RingLoader size={60} color={"#3498db"} loading={loading} />
            </div>
          ) : (
            <form className="space-y-4">
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
              <button
                type="button"
                className="mt-4 bg-primaryColor hover:bg-green-500 text-white p-3 rounded-full w-full"
                onClick={() => setDetails(true)}
              >
                Next
              </button>
            </form>
          )}
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
  }
};

SignUp.propTypes = {
  toggleForms: PropTypes.func.isRequired, // Define the expected type and that it's required
};

export default SignUp;
