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
import FreelancerForm from './components/FreelancerForm';
import FreelancerList from './components/FreelancerList';
import EmployerList from './components/EmployerList';
import EmployerForm from './components/EmployerForm';



import AuthContainer from './pages/AuthContainer';
import RoleIdentifier from './components/RoleIdentifier';
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
            <Route path="/role" element={<RoleIdentifier />} />
            <Route path="/chart" element={<IncomeChart />} />

            <Route path="*" element={<NoPage user={user} />} />

            <Route path="/freelancers" element={<FreelancerList />} />
            <Route path="/freelancers/create" element={<FreelancerForm />} />
            <Route path="/freelancers/edit/:id" element={<FreelancerForm />} />
            <Route path="/employers" element={<EmployerList />} />
            <Route path="/employers/create" element={<EmployerForm />} />
            <Route path="/employers/edit/:id" element={<EmployerForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
