import BelowHomePage from '../pages/BelowHomePage';

const Home = () => {
  return (
    <div className="">
      <div className="flex justify-between space-x-5 my-5">
        {/* Left Div */}
        <div className="flex flex-col w-[50%] space-y-5 h-[32rem]">
          {/* Left Main Card */} 
          <a
            href="https://link-to-your-page.com" 
            className="relative h-[60%] w-auto border- rounded-[1.5em] bg-primaryColor text-white font-outfit p-[1em] backdrop-blur-[12px] transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="absolute top-0 left-0 px-5 py-5">
              <h1 className="text-[2em] font-extrabold">
                Get Hired for <br /> Your Next <br /> Big Gig
              </h1>
            </div>

            <div className="absolute bottom-0 left-0 w-full text-center p-5">
              <p className="text-[0.85em]">
                Connecting Skilled Freelancers with Companies <br />Ready to Innovate
              </p>
            </div>
          </a>

          {/* Below Cards (Merged with Left) */}
          <div className="flex space-x-5 h-[40%] w-full">
            <a
              href="https://link-to-your-page.com"
              className="relative h-full w-[50%] border- rounded-[1.5em] bg-primaryColor text-white p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px] transition-transform duration-300 hover:scale-105 cursor-pointer overflow-hidden"
            >
              <img
                src="\Assets\Landing-page\belowcard1.jpeg"
                alt="Sample Image"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="absolute bottom-0 left-0 p-[1em] bg-opacity-40 rounded-lg font-outfit">
                <h1 className="text-[2em] font-bold">Project 1</h1>
              </div>
            </a>

            <a
              href="https://in.pinterest.com/" 
              className="relative h-full w-[50%] border- rounded-[1.5em] bg-primaryColor text-white p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px] transition-transform duration-300 hover:scale-105 cursor-pointer overflow-hidden"
            >
              <img
                src="\Assets\Landing-Page\belowcard2.jpeg"
                alt="Sample Image"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="absolute bottom-0 left-0 p-[1em] bg-opacity-40 rounded-lg font-outfit">
                <h1 className="text-[2em] font-bold">Project 2</h1>
              </div>
            </a>

          </div>
        </div>

        {/* Right Div */}
        <div className="relative w-[50%] h-[32rem] rounded-[30px] bg-lastColor overflow-hidden flex flex-col justify-between group transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="\Assets\Landing-Page\rightcardvid.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 px-5 py-5 ">
            <h1 className="text-[2em] font-medium"></h1>
            <p className="text-[0.85em]"></p>
          </div>
          <div className="relative z-10 flex items-center space-x-6 justify-center">
            <a className="mb-5 h-fit w-fit px-[1em] py-[0.25em] bg-white text-black border-[1px] border-white rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200">
              <p>Know More</p>
              <svg
                className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                stroke="currentColor"
                strokeWidth="1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </a>

            <a className="mb-5 h-fit w-fit px-[1em] py-[0.25em] bg-transparent text-white border-[1px] border-white rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200">
              <p>Contact Us</p>
              <svg
                className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                stroke="currentColor"
                strokeWidth="1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </a>
            </div>
          </div>
        </div>

      {/* BelowHomePage Component */}
      <BelowHomePage />
    </div>
  );
};

export default Home;
