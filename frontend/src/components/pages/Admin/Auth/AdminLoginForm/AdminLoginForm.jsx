import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
const AdminLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  return (
    <main role="main" className="container mx-auto py-16 px-4 flex-grow">
      <div className="flex justify-center">
        <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-md">
          <section aria-labelledby="admin-login-heading">
            <h1
              className="text-3xl font-bold text-center text-black mb-8"
              id="admin-login-heading"
            >
              Admin Login
            </h1>
            <form aria-labelledby="admin-login-heading">
              <div className="mb-6">
                <label
                  className="block text-gray-800 text-sm font-medium mb-2"
                  for="username"
                >
                  Username
                </label>
                <input
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-orange"
                  id="username"
                  placeholder="Enter your username"
                  type="text"
                />
              </div>
              <div className="mb-8 relative">
                <label
                  className="block text-gray-800 text-sm font-medium mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-orange"
                  id="password"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2  text-gray-600 hover:text-gray-800"
                  onClick={togglePassword}
                >
                  {showPassword ? (
                    <FaEye className="h-5 w-5" />
                  ) : (
                    <FaEyeSlash className="h-5 w-5" />
                  )}
                </button>
              </div>
              <button
                className="w-full bg-primary text-white font-bold py-3 px-6 rounded-md hover:text-gray-200"
                type="submit"
              >
                Login
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AdminLoginForm;
