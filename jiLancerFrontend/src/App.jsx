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
import Dashboard from './pages/Dashboard';

function App() {
  const [user, setUser] = useState(null);

 useEffect(() => {
   const checkLoginStatus = async () => {
     try {
      console.log("checking login status")
       const token = localStorage.getItem("access_token");
       const response = await axios.get(
         "http://localhost:8000/user_authentication/status/",
         {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         }
       );

       if (response.data.is_authenticated) {
         setUser(response.data.username);
       } else {
         setUser(null);
       }
     } catch (error) {
       console.error("Error checking login status:", error);
       setUser(null);
     }
   };

   checkLoginStatus();
 }, []);

  return (
    <div className="app bg-backgroundColor">
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            < Route path='/Auth' element={<AuthContainer/>}/>
            <Route path='/Dashboard' element={<Dashboard />} />
           <Route path='/Client' element ={<App/>}/>
            <Route path="*" element={<NoPage />} />
=======
          <Route path="/" element={<Layout user={user} />}>
            <Route index element={<Home user={user} />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/contact" element={<Contact user={user} />} />
            <Route path="/Auth" element={<AuthContainer />} />
            <Route path="*" element={<NoPage user={user} />} />
>>>>>>> 110326a61331f13ee752b5ebc4a225764e15e1a4
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
