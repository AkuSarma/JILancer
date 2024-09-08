import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './routes/Layout';
import Home from './pages/Home'
import Profile from './pages/Profile'
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard'
import axios from "axios";
import  { useEffect, useState } from "react";



import AuthContainer from './pages/AuthContainer';
import RoleIdentifier from './pages/RoleIdentifier';
import IncomeChart from './components/Dashboard_Profile/IncomeChart';

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
        console.log(user)
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
          <Route path="/" element={<Layout user={user} />}>
            <Route index element={<Home user={user} />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/contact" element={<Contact user={user} />} />
            <Route path="/Auth" element={<AuthContainer />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/role' element ={<RoleIdentifier />}/>
<<<<<<< HEAD
            <Route path='/chart' element ={<IncomeChart />}/>

=======
            <Route path="*" element={<NoPage user={user} />} />
>>>>>>> e8cd470ef3be8331219cadec0c4e5ae48fe1ffe2
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
