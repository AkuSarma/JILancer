
const Footer = () => {
  return (
    <footer className="bg-primaryColor text-white py-4 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-2">JIlancer</h2>
        <p className="">Innovative Solutions for a Brighter Future</p>
        <p className=" mt-4">
          © {new Date().getFullYear()} JIlancer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer