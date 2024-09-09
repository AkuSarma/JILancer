import React from "react";

const mockEmployers = [
  {
    id: 1,
    name: "Tech Corp",
    image: "https://via.placeholder.com/150",
    rating: 4.8,
    bio: "Leading company in technology solutions.",
  },
  {
    id: 2,
    name: "Design Studios",
    image: "https://via.placeholder.com/150",
    rating: 4.6,
    bio: "Creative agency specializing in digital design.",
  },
];

const EmployerList = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold">Employers</h1>
      <ul className="space-y-4">
        {mockEmployers.map((employer) => (
          <li key={employer.id} className="p-4 border rounded-md shadow-sm">
            <div className="flex items-center space-x-4">
              <img
                src={employer.image}
                alt={employer.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-medium">{employer.name}</h2>
                <p className="text-sm text-gray-600">
                  Rating: {employer.rating}
                </p>
                <p className="text-sm mt-2">{employer.bio}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployerList;
