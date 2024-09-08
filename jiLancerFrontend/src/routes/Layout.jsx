import { Outlet } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
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

// Add PropTypes for prop validation
Layout.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,  // Example validation for user object
    email: PropTypes.string,
    role: PropTypes.string
  })
};

// If 'user' is not required, you can set default props like this:
Layout.defaultProps = {
  user: null,  // or set a default structure if needed
};

export default Layout;
