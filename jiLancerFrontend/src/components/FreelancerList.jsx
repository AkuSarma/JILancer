import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FreelancerList = () => {
  const [freelancers, setFreelancers] = useState([]);

  useEffect(() => {
    const fetchFreelancers = async () => {
      try {
        const response = await axios.get("/portfolio/freelancers/");
        setFreelancers(response.data);
      } catch (error) {
        console.error("There was an error fetching freelancers!", error);
      }
    };
    fetchFreelancers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/portfolio/freelancers/${id}/delete/`);
      setFreelancers(freelancers.filter((freelancer) => freelancer.id !== id));
    } catch (error) {
      console.error("There was an error deleting the freelancer!", error);
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Freelancer List</h1>
      <Link
        to="/freelancers/create"
        className="inline-block bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Add New Freelancer
      </Link>
      <ul>
        {freelancers.map((freelancer) => (
          <li
            key={freelancer.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-md"
          >
            <div>
              <h2 className="text-xl font-semibold">{freelancer.name}</h2>
              <p>{freelancer.bio}</p>
            </div>
            <div>
              <Link
                to={`/freelancers/edit/${freelancer.id}`}
                className="mr-2 bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(freelancer.id)}
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

export default FreelancerList;
