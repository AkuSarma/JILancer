import Sidebar from "../Dashboard/sidebar";

const projects = [
  {
    id: 1,
    title: 'Food Web App Design',
    deadline: '2 days remaining',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Personal Website Design',
    deadline: '4 days remaining',
    status: 'Not Started',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    deadline: '5 days remaining',
    status: 'In Progress',
  },
  {
    id: 4,
    title: 'Social Media App Development',
    deadline: '1 day remaining',
    status: 'In Progress',
  },
  {
    id: 5,
    title: 'Blog Website Redesign',
    deadline: '7 days remaining',
    status: 'Completed',
  },
  {
    id: 1,
    title: 'Food Web App Design',
    deadline: '2 days remaining',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Personal Website Design',
    deadline: '4 days remaining',
    status: 'Not Started',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    deadline: '5 days remaining',
    status: 'In Progress',
  },
  {
    id: 4,
    title: 'Social Media App Development',
    deadline: '1 day remaining',
    status: 'In Progress',
  },
  {
    id: 5,
    title: 'Blog Website Redesign',
    deadline: '7 days remaining',
    status: 'Completed',
  },
];

const ProjectList = () => {
  return (
    <div>
    <div className="bg-white p-6 rounded-lg shadow-lg w-full my-5 h-fit ">
      <h2 className="text-2xl font-bold mb-4">Your Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="border-b last:border-none py-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.deadline}</p>
              </div>
              <div className={`py-1 px-3 rounded-lg text-white text-sm ${project.status === 'Completed' ? 'bg-green-500' : project.status === 'In Progress' ? 'bg-yellow-500' : 'bg-gray-400'}`}>
                {project.status}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <Sidebar/>
    </div>
  );
};

export default ProjectList;
