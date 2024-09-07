import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './routes/Layout';
import Home from './pages/Home'
import Profile from './pages/Profile'
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';
import axios from "axios";
import React, { useEffect, useState } from "react";



import AuthContainer from './pages/AuthContainer';

function App() {
  const [user, setUser] = useState(null);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/user_authentication/status",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`, // Ensure this is the correct token
          },
        }
      );

      if (response.data.is_authenticated) {
        // User is logged in, handle the response
        setUser(response.data.user);
      } else {
        // User is not logged in
        setUser(null)
      }
    } catch (error) {
      console.error("Error checking login status:", error);
    }
  };

  // checkLoginStatus();

  return (
    <div className="app bg-backgroundColor">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout user={user} />}>
            <Route index element={<Home user={user} />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/contact" element={<Contact user={user} />} />
            <Route path="/Auth" element={<AuthContainer />} />
            <Route path="*" element={<NoPage user={user} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
