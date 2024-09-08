import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = (props) => {
  const { user } = props; 
  return (
    <>
      <Navbar user={user} />
      <Outlet user={user} />
      <Footer />
    </>
  );
};

export default Layout;






