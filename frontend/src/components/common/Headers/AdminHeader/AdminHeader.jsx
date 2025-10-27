import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigator = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigator("/admin");
  };

  return (
    <header
      className="bg-primary p-6 sticky top-0"
      role="banner"
      aria-label="Header"
    >
      <div className="mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">LOGO</div>
        <nav className="flex items-center space-x-8 hidden md:flex" id="menu">
          <NavLink
            to={"/upload"}
            className="flex items-center text-white hover:text-gray-200 space-x-2"
            role="menuitem"
            aria-label="Upload Product"
          >
            <span className="material-icons text-lg">upload_file</span>
            <span>Upload Product</span>
          </NavLink>

          <NavLink
            to={"/dashboard"}
            className="flex items-center text-white hover:text-gray-200 space-x-2"
            role="menuitem"
            aria-label="Dashboard"
          >
            <span className="material-icons text-lg">dashboard</span>
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to={"/admin"}
            className="flex items-center text-white hover:text-gray-200 space-x-2 cursor-pointer"
            role="menuitem"
            aria-label="Logout"
          >
            <span className="material-icons text-lg">logout</span>
            <span onClick={handleLogout}>Logout</span>
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
        <nav className="flex flex-col space-y-4 mt-4 md:hidden" id="menu">
          <NavLink
            to={"/upload"}
            className="flex items-center text-white hover:text-gray-200 space-x-2"
            aria-label="Upload Product"
          >
            <span className="material-icons text-lg">upload_file</span>
            <span>Upload Product</span>
          </NavLink>

          <NavLink
            to={"/dashboard"}
            className="flex items-center text-white hover:text-gray-200 space-x-2"
            aria-label="Dashboard"
          >
            <span className="material-icons text-lg">dashboard</span>
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to={"/admin"}
            className="flex items-center text-white hover:text-gray-200 space-x-2 cursor-pointer"
            aria-label="Logout"
          >
            <span className="material-icons text-lg">logout</span>
            <span onClick={handleLogout}>Logout</span>
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default AdminHeader;
