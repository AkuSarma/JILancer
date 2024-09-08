import { useState } from "react";

const FreelanceServices = () => {
  const testimonials = [
    {
      text: "Working with Fiverr makes my job a little easier every day.",
      img: "/path/to/your-image1.jpg",
    },
    {
      text: "Freelancers from Fiverr help me scale my projects.",
      img: {},
    },
    {
      text: "Great experience working with Fiverr for my business needs.",
      img: "/path/to/your-image3.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="bg-[#C9DABF] p-6 min-h-screen">
      {/* Header Section */}
      <div className="relative mb-8">
        <img
          src="/path/to/your-image.jpg"
          alt="Header"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 rounded-lg">
          <h1 className="text-white text-4xl font-bold animate-fade-in-up">
            Reimagine your ideas!
          </h1>
          <p className="text-white mt-2 text-xl animate-fade-in-up">
            popular services
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center ">
        {/* Web Development Card */}
        <div className="h-[16rem] bg-[#9CA986] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl">
          <p className="text-white text-xl font-semibold">Web Development</p>
        </div>

        {/* Logo Design Card */}
        <div className="bg-[#808D7C] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl">
          <p className="text-white text-xl font-semibold">Logo Design</p>
        </div>

        {/* SEO Card */}
        <div className="bg-[#C9DABF] p-6 rounded-lg shadow-lg border-2 border-[#9CA986] transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl">
          <p className="text-[#5F6F65] text-xl font-semibold">SEO</p>
        </div>

        {/* Architecture Design Card */}
        <div className="bg-[#5F6F65] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl">
          <p className="text-white text-xl font-semibold">
            Architecture & Interior Design
          </p>
        </div>
      </div>

      {/*  */}

      <div className="bg-lastColor p-6 rounded-lg shadow-lg w-auto mx-auto mt-5 h-auto">
        <h2 className="text-3xl font-bold text-[#5F6F65] mb-4">Testimonials</h2>

        {/* Testimonial Content */}
        <div className="flex items-center space-x-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="p-2 bg-[#808D7C] text-white rounded-full transform hover:scale-110 transition duration-300 ease-in-out"
          >
            ←
          </button>

          {/* Testimonial Text */}
          <div className="flex-1 bg-[#9CA986] p-6 rounded-lg text-white transition-all duration-500 ease-in-out transform hover:scale-105 shadow-md">
            <p>{testimonials[current].text}</p>
          </div>

          {/* Testimonial Image */}
          <div className="flex-1">
            <img
              src={testimonials[current].img}
              alt="Testimonial"
              className="rounded-lg h-48 w-full object-cover shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="p-2 bg-[#808D7C] text-white rounded-full transform hover:scale-110 transition duration-300 ease-in-out"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreelanceServices;
