const ContactUs = () => {
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
          <form aria-labelledby="contact-us-heading">
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
                placeholder="Enter your name"
                type="text"
                required
              />
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
                placeholder="Enter your phone number"
                type="tel"
                required
              />
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
                placeholder="Write your message here..."
                rows="6"
                required
              ></textarea>
            </div>
            <button
              className="w-full bg-primary text-white font-bold py-3 px-6 rounded-md hover:text-gray-200"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default ContactUs;
