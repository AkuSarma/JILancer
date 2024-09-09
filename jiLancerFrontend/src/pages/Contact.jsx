
import ContactForm from '../pages/Contact/ContactForm';
import GetInTouch from '../pages/Contact/GetInTouch';


const ContactPage = () => {
  return (
    <div className="min-h-screen bg-backgroundColor flex items-center justify-center">
      <div className="md:flex-row space-y-8 md:space-y-0 md:space-x-8  w-11/12 max-w-6xl flex flex-row">
        <ContactForm />
        <GetInTouch />
      </div>
    </div>
  );
};

export default ContactPage;
