import { useNavigate } from "react-router-dom";

const RecommendedProjects = () => {

    const navigate = useNavigate();
    const ListOfProject = () => {
        navigate('/NewProject')
    }
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">Recommended Projects</h2>
      <div className="mt-4">
        <div className="flex justify-between">
          <div>
            <h3>Milovan Salvador</h3>
            <p className="text-sm">Setup Google Analytics Ecommerce Tracking</p>
          </div>
          <div className="text-right">
            <span>₹500/hr</span>
            <p className="text-xs">Part time</p>
          </div>
        </div>
        <div className="flex items-end justify-end mt-1">
        <a 
        onClick={ListOfProject}
        className="border-b-2 border-black cursor-pointer"
        >See all</a>
        </div>
        
      </div>
    </div>
  );
};

export default RecommendedProjects;
