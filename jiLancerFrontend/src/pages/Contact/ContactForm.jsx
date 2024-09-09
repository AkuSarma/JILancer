
const ContactForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
      <h2 className="text-2xl font-bold mb-4">Contact us</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primaryColor"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Message"
            className="border border-gray-300 p-2 rounded-lg w-full h-24 focus:outline-none focus:ring-2 focus:ring-primaryColor"
          ></textarea>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="privacy"
            className="mr-2"
          />
          <label htmlFor="privacy" className="text-sm text-gray-600">
            You agree to our <a href="#" className="text-primaryColor underline">Privacy Policy</a>.
          </label>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
