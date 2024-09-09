import React, { useState } from "react";
import axios from "axios";

const FreelancerForm = ({ freelancer, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: freelancer?.name || "",
    image: null,
    rating: freelancer?.rating || "",
    bio: freelancer?.bio || "",
    skills: freelancer?.skills?.join(", ") || "",
    certifications: freelancer?.certifications?.join(", ") || "",
    achievements: freelancer?.achievements?.join(", ") || "",
    languages: freelancer?.languages?.join(", ") || "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      if (freelancer) {
        await axios.put(`/portfolio/freelancers/${freelancer.id}/edit/`, data);
      } else {
        await axios.post("/portfolio/freelancers/", data);
      }
      onSubmitSuccess();
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Profile Image
        </label>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Rating
        </label>
        <input
          type="number"
          step="0.1"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Skills (comma-separated)
        </label>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Certifications (comma-separated)
        </label>
        <input
          type="text"
          name="certifications"
          value={formData.certifications}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Achievements (comma-separated)
        </label>
        <input
          type="text"
          name="achievements"
          value={formData.achievements}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Languages (comma-separated)
        </label>
        <input
          type="text"
          name="languages"
          value={formData.languages}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        {freelancer ? "Update Freelancer" : "Create Freelancer"}
      </button>
    </form>
  );
};

export default FreelancerForm;
