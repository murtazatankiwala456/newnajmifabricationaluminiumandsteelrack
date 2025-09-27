import { useState } from "react";
const ContactUs = () => {
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
    if (formData.name.trim() === "") {
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
                  strokeWidth={1.5}
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
      <section className="mt-15 md:py-16" aria-labelledby="find-us">
        <h2
          className="text-3xl font-bold text-black mb-8 text-center"
          id="find-us"
        >
          Where to Find Us
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
          <a
            id="google-business-link"
            className="inline-flex items-center justify-center bg-white text-gray-800 font-semibold p-4 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition duration-300"
            href="https://share.google/0JFnjBo7Ax6NqzAp1"
            target="_blank"
            role="social-link"
            aria-label="Link to Google Business"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="14.25 19.557 24 19.557 24 7.094 15.858 7.094 14.25 19.557" />
              <path d="M15.8582,7.0938H9.1424A2,2,0,0,0,7.2006,8.6145L4.5,19.5573h9.75" />
              <path d="M24,19.5573a4.875,4.875,0,0,1-9.75,0" />
              <path d="M14.25,19.5573a4.875,4.875,0,0,1-9.75,0" />
              <polygon points="33.75 19.557 24 19.557 24 7.094 32.142 7.094 33.75 19.557" />
              <path d="M32.1418,7.0938h6.7158a2,2,0,0,1,1.9418,1.5207L43.5,19.5573H33.75" />
              <path d="M24,19.5573a4.875,4.875,0,0,0,9.75,0" />
              <path d="M33.75,19.5573a4.875,4.875,0,0,0,9.75,0" />
              <path d="M7.3252,23.9768V38.9062a2,2,0,0,0,2,2h29.35a2,2,0,0,0,2-2V23.978" />
            </svg>
          </a>
          <a
            id="just-dial-link"
            className="inline-flex items-center justify-center bg-white text-gray-800 font-semibold p-4 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition duration-300"
            href="https://www.justdial.com/Indore/New-Najmi-Fabrication-Aluminium-and-Steel-Rack-Nagar-Nigam-Market-Jawahar-Road/0731PX731-X731-130502232449-J1H5_BZDET?auto=1&trkid=2937266873&term=Najmi%20Fabrication%20fa"
            target="_blank"
            role="social-link"
            aria-label="Link to Just Dial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <text
                x="24"
                y="28"
                font-family="Arial, Helvetica, sans-serif"
                font-size="37"
                font-weight="bold"
                fill="currentColor"
                text-anchor="middle"
                dominant-baseline="middle"
                stroke="none"
              >
                Jd
              </text>
            </svg>
          </a>
          <a
            id="indiamart-link"
            className="inline-flex items-center justify-center bg-white text-gray-800 font-semibold p-4 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition duration-300"
            href="https://www.indiamart.com/najmi-fabrication-steel/aboutus.html?srsltid=AfmBOooapQQKOjy8NHJfFvdWh9I3ZC8jlXh_vrFVNjQcZOXe70bhEEen"
            target="_blank"
            role="social-link"
            aria-label="Link to India Mart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle
                cx="18"
                cy="12"
                r="3.5"
                fill="currentColor"
                stroke="none"
              />
              <circle
                cx="30"
                cy="12"
                r="3.5"
                fill="currentColor"
                stroke="none"
              />

              <ellipse
                cx="24"
                cy="28"
                rx="20"
                ry="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              />

              <path
                d="M12 20 L12 36 M12 20 L24 32 M36 20 L24 32 M36 20 L36 36"
                strokeWidth="3"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};
export default ContactUs;
