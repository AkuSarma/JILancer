const ProjectsOverview = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-[50%]">
      <div className="flex justify-between">
        <div className="text-center">
          <h3 className="text-lg">Rank</h3>
          <p className="text-3xl">67</p>
          <span className="text-sm">in top 30%</span>
        </div>
        <div className="text-center">
          <h3 className="text-lg">Projects</h3>
          <p className="text-3xl">45</p>
          <span className="text-sm">10 this month</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsOverview;
