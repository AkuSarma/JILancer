import { useState } from "react";
import LoginForm from "../components/Login";
import SignUp from "../components/SignUp";

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and sign-up

  const toggleForms = () => {
    setIsLogin(!isLogin); // Switch between login and sign-up
  };

  return (
    <div>
      <div>
        {isLogin ? (
          <LoginForm toggleForm={toggleForms} />
        ) : (
          <SignUp toggleForms={toggleForms} />
        )}
      </div>
    </div>
  );
};

export default AuthContainer;
