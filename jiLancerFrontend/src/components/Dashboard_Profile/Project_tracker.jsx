import { useState } from 'react';

const ProjectTracker = () => {
  const [projects, setProjects] = useState([
    { name: 'Project A', status: 'In Progress' },
    { name: 'Project B', status: 'Completed' },
  ]);

  // Example function to add a new project
  const addProject = () => {
    const newProject = { name: 'Project C', status: 'Not Started' };
    setProjects([...projects, newProject]);
  };

  return (
    <div className="bg-[#C9DABF] text-[#5F6F65] p-5 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Project Tracker</h2>
      <ul className="list-disc list-inside">
        {projects.map((project, index) => (
          <li key={index} className="mb-2">
            <strong>{project.name}</strong>: {project.status}
          </li>
        ))}
      </ul>
      <button 
        onClick={addProject} 
        className="mt-4 bg-[#9CA986] text-white py-2 px-4 rounded-md hover:bg-[#808D7C]">
        Add Project
      </button>
    </div>
  );
};

export default ProjectTracker;
