import { FaEye, FaEyeSlash } from "react-icons/fa";
import { use, useState } from "react";
const AdminLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  const [formdata, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  //dummy auth
  const username = "admin";
  const password = "123";
  ////dummy auth

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = {};
    if (formdata.username === "") {
      validateErrors.username = "Username is required";
    } else if (formdata.username !== username) {
      validateErrors.username = "Invalid username";
    }
    if (formdata.password === "") {
      validateErrors.password = "Password is required";
    } else if (formdata.password !== password) {
      validateErrors.password = "Invalid password";
    }
    setError(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      setSuccessMessage("Login successful");
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };
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
            <form aria-labelledby="admin-login-heading" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  className="block text-gray-800 text-sm font-medium mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-orange"
                  id="username"
                  placeholder="Enter your username"
                  type="text"
                  name="username"
                  value={formdata.username}
                  onChange={handleChange}
                />
                {error.username && (
                  <p className="text-red-500 text-sm mt-2">{error.username}</p>
                )}
              </div>
              <div className="mb-8 relative">
                <label
                  className="block text-gray-800 text-sm font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-orange"
                  id="password"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formdata.password}
                  onChange={handleChange}
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
                {error.password && (
                  <p className="text-red-500 text-sm mt-2">{error.password}</p>
                )}
              </div>
              <button
                className="w-full bg-primary text-white font-bold py-3 px-6 rounded-md hover:text-gray-200"
                type="submit"
              >
                Login
              </button>
            </form>
            {successMessage && (
              <p className="text-green-500 text-sm mt-2">{successMessage}</p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default AdminLoginForm;
