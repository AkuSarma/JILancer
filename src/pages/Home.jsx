const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2 space-x-0 justify my-5">
        {/* left card */}
        <div className="h-[32em] w-[36em] border- rounded-[1.5em] bg-gradient-to-br from-navbarGreen to-lime200 text-black font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px] ">
          <div className="px-2 py-2">
            <h1 className="text-[2em] font-medium">Heading</h1>
            <p className="text-[0.85em]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              dolorum blanditiis pariatur sequi magni.
            </p>
          </div>
          <button className=" h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[1em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
            <p>Button</p>
            <svg
              className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
              stroke="currentColor"
              strokeWidth="1"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
        </div>

        {/* right card */}

        <div className="w-800 h-[50rem] shadow-[15px_15px_30px_rgb(25,25,25),-15px_-15px_30px_rgb(60,60,60)] rounded-[30px] bg-navbarGreen flex flex-col justify-between">
          <div className="px-5 py-5">
            <h1 className="text-[2em] font-medium">Heading</h1>
            <p className="text-[0.85em]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              dolorum blanditiis pariatur sequi magni.
            </p>
            <img src="src/otherFile/images.jpg"/>
          </div>
          <div className="flex items-center space-x-6 justify-center">
          <a className="  mb-5 h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
            <p>Button</p>
            <svg
              className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
              stroke="currentColor"
              strokeWidth="1"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </a>

          <a className="  mb-5 h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
            <p>Button</p>
            <svg
              className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
              stroke="currentColor"
              strokeWidth="1"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
