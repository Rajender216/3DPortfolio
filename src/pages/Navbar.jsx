import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-black shadow-[0_15px_35px_rgba(0,0,0,0.2),_0_5px_15px_rgba(0,0,0,0.15)] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white cursor-pointer transition-all duration-300 hover:text-cyan-400 hover:scale-105">
                RC
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLinks />
            </div>

            {/* Contact Button - Desktop */}
            <div className="hidden md:flex items-center">
              <ContactButton />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-cyan-400 focus:outline-none transition-colors duration-300"
              >
                {isOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-lg z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-2xl border-l border-gray-800`}
      >
        <div className="flex flex-col items-start p-6 space-y-8 mt-16">
          <NavLinks mobile setIsOpen={setIsOpen} />
          <ContactButton mobile setIsOpen={setIsOpen} />
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        />
      )}
    </>
  );
};

const NavLinks = ({ mobile, setIsOpen }) => {
  const commonStyles =
    "text-gray-300 hover:text-cyan-400 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:font-bold relative group";

  const handleClick = () => {
    if (setIsOpen) setIsOpen(false);
  };

  return (
    <>
      {["home", "projects", "skills"].map((item) => (
        <Link
          key={item}
          to={item}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`${commonStyles} ${mobile ? "text-xl" : ""}`}
          activeClass="text-cyan-400 font-bold"
          onClick={handleClick}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
          {!mobile && (
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          )}
        </Link>
      ))}
    </>
  );
};

const ContactButton = ({ mobile, setIsOpen }) => {
  const handleClick = () => {
    if (setIsOpen) setIsOpen(false);
  };

  return (
    <Link
      to="contact"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className={`relative inline-flex items-center px-6 py-2 border border-cyan-400 text-sm font-medium rounded-md text-white bg-transparent hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] overflow-hidden group ${
        mobile ? "mt-4 text-base" : ""
      }`}
      onClick={handleClick}
    >
      <span className="relative z-10">Contact Me</span>
      <span className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </Link>
  );
};

export default Navbar;
