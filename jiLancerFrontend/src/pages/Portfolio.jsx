/*
Freelancer
================
Name
rating
Bio
social media links
skill
projects
completed work
certifications
achievements
languages

Employer
================
Name
rating
bio
social media links
projects given

*/

const Portfolio = () => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-8">
      <div className="text-2xl font-bold text-gray-700 mb-4">Portfolio</div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center mb-4">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-12 h-12 rounded-full mr-2"
            />
            <div className="text-gray-700 font-bold">Profile</div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="first-name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              placeholder="First Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none   
 focus:shadow-outline"
              value="John" // Dummy data
              readOnly // Make it read-only for demonstration
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="last-name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              placeholder="Last Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none   
 focus:shadow-outline"
              value="Doe" // Dummy data
              readOnly // Make it read-only for demonstration
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="bio"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Bio
            </label>
            <textarea
              id="bio"
              placeholder="Bio"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none   
 focus:shadow-outline resize-none"
              value="I   
 am a skilled web developer with a passion for creating innovative and user-friendly websites. I have experience in HTML, CSS, JavaScript, and React. I am always eager to learn new technologies and improve my skills." // Dummy data
              readOnly // Make it read-only for demonstration
            ></textarea>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="text-gray-700 font-bold mb-4">Projects</div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Project 1"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value="E-commerce Website" // Dummy data
              readOnly // Make it read-only for demonstration
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Project 2"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value="Social Media App" // Dummy data
              readOnly // Make it read-only for demonstration
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Project 3"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value="Portfolio Website" // Dummy data
              readOnly // Make it read-only for demonstration
            />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="text-gray-700 font-bold mb-4">Completed works</div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Work 1"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value="Design Sprint" // Dummy data
              readOnly // Make it read-only for demonstration
            />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 col-span-2">
          <div className="text-gray-700 font-bold mb-4">Languages</div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Language 1"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value="JavaScript" // Dummy data
              readOnly // Make it read-only for demonstration
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Language 2"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value="Python" // Dummy data
              readOnly // Make it read-only for demonstration
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;