
import { FaPhone, FaEnvelope, FaTicketAlt } from 'react-icons/fa';

const GetInTouch = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-600 mb-6">
        You need more information? Check what other persons are saying about our product. They are very happy with their purchase.
      </p>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <FaPhone className="text-primaryColor mr-3" />
          <p className="text-gray-600">+1 (424) 535 3523</p>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-primaryColor mr-3" />
          <p className="text-gray-600">hello@mail.com</p>
        </div>
        <div className="flex items-center">
          <FaTicketAlt className="text-primaryColor mr-3" />
          <p className="text-gray-600">Open Support Ticket</p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
