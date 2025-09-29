import { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary p-6" role="banner" aria-label="Header">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">LOGO</div>
        <nav className="flex items-center space-x-8 hidden md:block" id="menu">
          <NavLink
            to={"/"}
            className="text-white hover:text-gray-200"
            role="menuitem"
            aria-label="Link Home"
          >
            Home
          </NavLink>
          <NavLink
            to={"/about-us"}
            className="text-white hover:text-gray-200"
            role="menuitem"
            aria-label="Link About Us"
          >
            About Us
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className="text-white hover:text-gray-200"
            role="menuitem"
            aria-label="Link Contact Us"
          >
            Contact Us
          </NavLink>
        </nav>

        <button
          id="hamburger"
          type="button"
          aria-controls="menu"
          aria-expanded={isOpen ? "true" : "false"}
          className={`${isOpen ? "hidden" : "block"} md:hidden`}
          tabIndex={isOpen ? -1 : 0}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden={isOpen ? "false" : "true"}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 6H6m12 4H6m12 4H6m12 4H6"
            />
          </svg>
        </button>
        <button
          id="cross"
          type="button"
          aria-controls="menu"
          aria-expanded={isOpen ? "false" : "true"}
          className={`${isOpen ? "block" : "hidden"} md:hidden`}
          tabIndex={isOpen ? 0 : -1}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden={isOpen ? "true" : "false"}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 18 6M6 6 18 18"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav
          className="flex flex-col justify-center space-y-4 mt-4 md:hidden"
          id="menu"
        >
          <NavLink
            to={"/"}
            className="text-white hover:text-gray-200"
            role="menuitem"
            aria-label="Link Home"
            tabIndex={isOpen ? 0 : -1}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about-us"}
            className="text-white hover:text-gray-200"
            role="menuitem"
            aria-label="Link About Us"
            tabIndex={isOpen ? 0 : -1}
          >
            About Us
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className="text-white hover:text-gray-200"
            role="menuitem"
            aria-label="Link Contact Us"
            tabIndex={isOpen ? 0 : -1}
          >
            Contact Us
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
