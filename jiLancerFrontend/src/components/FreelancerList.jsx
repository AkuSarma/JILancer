import React from "react";

const mockFreelancers = [
  {
    id: 1,
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    bio: "Experienced web developer with a passion for coding.",
    skills: "JavaScript, React, Node.js",
    certifications: "Certified React Developer",
    achievements: "Built top-rated app",
    languages: "English, Spanish",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://via.placeholder.com/150",
    rating: 4.7,
    bio: "UI/UX designer with a focus on user-centered design.",
    skills: "Adobe XD, Figma, Sketch",
    certifications: "Certified UX Designer",
    achievements: "Designed award-winning website",
    languages: "English, French",
  },
];

const FreelancerList = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold">Freelancers</h1>
      <ul className="space-y-4">
        {mockFreelancers.map((freelancer) => (
          <li key={freelancer.id} className="p-4 border rounded-md shadow-sm">
            <div className="flex items-center space-x-4">
              <img
                src={freelancer.image}
                alt={freelancer.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-medium">{freelancer.name}</h2>
                <p className="text-sm text-gray-600">
                  Rating: {freelancer.rating}
                </p>
                <p className="text-sm mt-2">{freelancer.bio}</p>
                <p className="mt-2">
                  <strong>Skills:</strong> {freelancer.skills}
                </p>
                <p className="mt-2">
                  <strong>Certifications:</strong> {freelancer.certifications}
                </p>
                <p className="mt-2">
                  <strong>Achievements:</strong> {freelancer.achievements}
                </p>
                <p className="mt-2">
                  <strong>Languages:</strong> {freelancer.languages}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreelancerList;
