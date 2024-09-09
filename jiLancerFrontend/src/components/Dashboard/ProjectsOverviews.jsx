const ProjectsOverview = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-[50%] w-fit">
      <div className="flex flex-col ">
        <div className="text-center flex flex-row">
          <p className="text-3xl bg-primaryColor h-fit p-2 border- rounded-xl">67</p>
          <div className="mx-5">
          <h3 className="text-lg ">Rank</h3>
          <span className="text-sm">in top 30%</span>
          </div>
        </div>
        <div className="text-center bg-secondaryColor border- rounded-3xl p-5 my-5" >
          <h3 className="text-lg">Projects</h3>
          <p className="text-3xl">45</p>
          <span className="text-sm">10 this month</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsOverview;
