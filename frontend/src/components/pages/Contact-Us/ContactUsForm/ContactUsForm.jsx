import { useState } from "react";
const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = {};
    if (formData.name === "") {
      validateErrors.name = "Name is required";
    }
    if (formData.phone === "") {
      validateErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      validateErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (formData.message === "") {
      validateErrors.message = "Message is required";
    }

    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      setFormData({
        name: "",
        phone: "",
        message: "",
      });
      setSuccessMessage("Form submitted successfully");

      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };

  return (
    <div className="container mx-auto max-w-2xl">
      <section aria-labelledby="contact-us-heading">
        <h1
          className="text-4xl font-bold text-black text-center mb-12"
          id="contact-us-heading"
        >
          Contact Us
        </h1>
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <form aria-labelledby="contact-us-heading" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                className="block text-gray-800 text-sm font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-orange"
                id="name"
                name="name"
                placeholder="Enter your name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1" role="alert">
                  {errors.name}
                </span>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-800 text-sm font-medium mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-orange"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm mt-1" role="alert">
                  {errors.phone}
                </span>
              )}
            </div>
            <div className="mb-8">
              <label
                className="block text-gray-800 text-sm font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-orange"
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm mt-1" role="alert">
                  {errors.message}
                </span>
              )}
            </div>
            <button
              className="w-full bg-primary text-white font-bold py-3 px-6 rounded-md hover:text-gray-200"
              type="submit"
            >
              Submit
            </button>
            {successMessage && (
              <div
                className="flex items-center justify-center text-green-600 text-center mt-4 font-medium"
                role="status"
              >
                <span>{successMessage}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};
export default ContactUsForm;
