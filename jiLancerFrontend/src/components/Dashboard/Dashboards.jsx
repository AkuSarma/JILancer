import Sidebar from '../Dashboard/sidebar';
import EarningsCard from '../Dashboard/EarningsCard';
import ProjectsOverview from '../Dashboard/ProjectsOverviews';
import Invoices from '../Dashboard/Invoices';
import RecommendedProjects from '../Dashboard/RecommendedProjects';

const Dashboard = () => {
  return (
    <div className="relative min-h-screen pb-10 mb-20">
      <main className="bg-backgroundColor p-10">
        <div className="flex justify-between">
          <h1 className="text-2xl">Good Morning, Shaun</h1>
          <input
            type="text"
            placeholder="Search for projects"
            className="border p-2 rounded-lg"
          />
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6">
          <EarningsCard />
          <ProjectsOverview />
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6">
          <Invoices />
          <RecommendedProjects />
        </div>
      </main>
      <Sidebar />
    </div>
  );
};

export default Dashboard;


