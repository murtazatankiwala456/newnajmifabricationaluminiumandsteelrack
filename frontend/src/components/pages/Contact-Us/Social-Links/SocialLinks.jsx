const SocialLinks = () => {
  return (
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
            <circle cx="18" cy="12" r="3.5" fill="currentColor" stroke="none" />
            <circle cx="30" cy="12" r="3.5" fill="currentColor" stroke="none" />

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
  );
};

export default SocialLinks;
