import {
  FaTachometerAlt,
  FaFolderOpen,
  FaFileInvoice,
  FaUser 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

    const navigate = useNavigate();
    const  ProjectList = () => {
       navigate("/ProjectList")
    }
  return (
    <div className="flex justify-center items-center">
      <div className="fixed bottom-10 w-[50%] bg-lastColor h-16 md:h-20 flex justify-around items-center border- rounded-3xl">
        <a
          href="#"
          className="text-white text-2xl md:text-3xl hover:text-primaryColor"
        >
          <FaTachometerAlt />
        </a>
        <a
          onClick={ProjectList}
          className="text-white text-2xl md:text-3xl hover:text-primaryColor"
        >
          <FaFolderOpen />
        </a>
        <a
          href="#"
          className="text-white text-2xl md:text-3xl hover:text-primaryColor"
        >
          <FaFileInvoice />
        </a>
        <a
          href="#"
          className="text-white text-2xl md:text-3xl hover:text-primaryColor"
        >
          <FaUser  />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
