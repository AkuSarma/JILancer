import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EmployerList = () => {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    const fetchEmployers = async () => {
      try {
        const response = await axios.get("/portfolio/employers/");
        setEmployers(response.data);
      } catch (error) {
        console.error("There was an error fetching employers!", error);
      }
    };
    fetchEmployers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/employers/${id}/delete/`);
      setEmployers(employers.filter((employer) => employer.id !== id));
    } catch (error) {
      console.error("There was an error deleting the employer!", error);
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Employer List</h1>
      <Link
        to="/employers/create"
        className="inline-block bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Add New Employer
      </Link>
      <ul>
        {employers.map((employer) => (
          <li
            key={employer.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-md"
          >
            <div>
              <h2 className="text-xl font-semibold">{employer.name}</h2>
              <p>{employer.bio}</p>
            </div>
            <div>
              <Link
                to={`/employers/edit/${employer.id}`}
                className="mr-2 bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(employer.id)}
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployerList;
