import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './routes/Layout';
import Home from './pages/Home'
import Profile from './pages/Profile'
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
