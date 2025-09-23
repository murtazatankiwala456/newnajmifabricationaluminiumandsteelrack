import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary p-6" role="banner" aria-label="Header">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">LOGO</div>
        <nav className="flex items-center space-x-8 hidden md:block">
          <a
            className="text-white hover:text-gray-200"
            href="#"
            role="menuitem"
            aria-label="Link Home"
          >
            Home
          </a>
          <a
            className="text-white hover:text-gray-200 active-link"
            href="#"
            role="menuitem"
            aria-label="Link About Us"
          >
            About Us
          </a>
          <a
            className="text-white hover:text-gray-200"
            href="#"
            role="menuitem"
            aria-label="Link Contact Us"
          >
            Contact Us
          </a>
        </nav>

        <button
          id="hamburger"
          type="button"
          aria-controls="menu"
          aria-expanded={isOpen ? "false" : "true"}
          className={`${isOpen ? "hidden" : "block"} md:hidden`}
          tabIndex={isOpen ? -1 : 0}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 6H6m12 4H6m12 4H6m12 4H6"
            />
          </svg>
        </button>
        <button
          id="cross"
          type="button"
          aria-controls="menu"
          aria-expanded={isOpen ? "true" : "false"}
          className={`${isOpen ? "block" : "hidden"} md:hidden`}
          tabIndex={isOpen ? 0 : -1}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 18 6M6 6 18 18"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav
          className="flex flex-col justify-center space-y-4 mt-4 md:hidden"
          href="#"
          role="menuitem"
          aria-label="Link Home"
          tabIndex={isOpen ? 0 : -1}
        >
          <a className="text-white hover:text-gray-200" href="#">
            Home
          </a>
          <a
            className="text-white hover:text-gray-200 active-link"
            href="#"
            role="menuitem"
            aria-label="Link About Us"
            tabIndex={isOpen ? 0 : -1}
          >
            About Us
          </a>
          <a
            className="text-white hover:text-gray-200"
            href="#"
            role="menuitem"
            aria-label="Link Contact Us"
            tabIndex={isOpen ? 0 : -1}
          >
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
