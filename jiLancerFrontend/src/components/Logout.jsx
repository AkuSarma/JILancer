import axios from "axios";
import { useNavigate } from "react-router-dom";


const logout = () => {
    const navigate = useNavigate();
    const handleLogout = async (e) => {
        e.preventDefault();
      try {
        console.log("trying to logout");
        const refreshToken = localStorage.getItem("refresh_token"); // Get the stored refresh token
        await axios.post("http://localhost:8000/user_authentication/logout/", {
          refresh_token: refreshToken,
        });

        // Clear tokens from localStorage (or cookies)
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");

        // Redirect to login page or update UI
        navigate("/Auth"); // Redirect to login
        console.log("loged out");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };


  return (
    <form onSubmit={handleLogout}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default logout;
