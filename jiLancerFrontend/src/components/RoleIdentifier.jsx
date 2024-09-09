import { RingLoader } from "react-spinners"; // Import the spinner
import { useState } from "react";
import axios from "axios";

const RoleIdentifier = ({username, email, password, setDetails}) => {
  const [loading, setLoading] = useState(false); // Manage loading state if needed
  const [isFreelancer, setIsFreelancer] = useState(false);

  // const handleRoleSelection = (isFreelancer) => {
  //   console.log("handling the is freelancer function")
  //   setLoading(true);
  //   setIsFreelancer(isFreelancer);
  //   setTimeout(() => {
  //     // Simulate loading delay
  //     setLoading(false);
  //     // Assuming this function needs to do more stuff
  //   }, 500);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    console.log("trying to submit");
    try {
      const response = await axios.post(
        "http://localhost:8000/user_authentication/register/",
        {
          username,
          email,
          password,
          is_freelancer: isFreelancer,
        }
      );
      setDetails(false);
      setLoading(true);
      console.log("Registration successful:", response.data);
      navigate("/Auth");
    } catch (error) {
      console.error("Error during registration:", error);
    } finally {
      setLoading(false); // Stop loading when done
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <RingLoader size={60} color={"#9CA986"} loading={loading} />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1 className="text-[2rem] mt-20 text-center font-bold text-white">
            Join as a client or freelancer
          </h1>
          <div className="grid grid-cols-2 gap-2 bg-lastColor my-10 mx-40 p-10 h-[30rem] border rounded-3xl">
            <div className="p-20 border rounded-[1.5em] bg-white text-black font-nunito flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
              <div className="px-2 py-2">
                <p className="text-[2em] font-bold">
                  I'm a client, hiring for a project.
                </p>
              </div>
              <button
                onClick={() => setIsFreelancer(false)}
                type="submit"
                className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[1em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
              >
                <p>Get Started</p>
                <svg
                  className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                  stroke="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Freelancer section */}
            <div className="p-20 border rounded-[1.5em] bg-white text-black font-nunito flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
              <div className="px-2 py-2">
                <p className="text-[2em] font-bold">
                  I'm a freelancer, looking for work.
                </p>
              </div>
              <button
                onClick={() => setIsFreelancer(true)}
                type="submit"
                className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[1em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
              >
                <p>Get Started</p>
                <svg
                  className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                  stroke="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default RoleIdentifier;
