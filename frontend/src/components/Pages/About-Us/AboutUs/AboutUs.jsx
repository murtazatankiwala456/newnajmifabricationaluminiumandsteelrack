const AboutUs = () => {
  return (
    <>
      <h1
        id="about-us-heading"
        className="text-5xl text-center font-bold text-black mb-12"
      >
        About Us
      </h1>
      <div className="max-w-4xl mx-auto">
        <section aria-labelledby="what-we-do">
          <h2 className="text-3xl font-bold text-black mb-4 text-center">
            What We Do
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <strong>New Najmi Fabrication Aluminium & Steel Racks</strong>,
            we specialize in providing durable, innovative, and customized
            storage and structural solutions.
          </p>
          <ul class="list-disc pl-6 text-gray-700 text-lg leading-relaxed space-y-2">
            <li>
              <strong>Aluminium Sections</strong> – lightweight, strong, and
              versatile profiles for commercial and residential use.
            </li>
            <li>
              <strong>Steel Racks</strong> – heavy-duty, space-saving storage
              racks designed to organize warehouses, shops, and offices.
            </li>
            <li>
              <strong>Tailored Solutions</strong> – we understand that every
              client’s need is unique, so we provide personalized designs and
              recommendations.
            </li>
            <li>
              <strong>Quality & Reliability</strong> – from material selection
              to finishing, we ensure products meet the highest standards of
              durability and safety.
            </li>
          </ul>
          <p class="text-gray-700 text-lg leading-relaxed mt-4">
            We don’t just sell products — we provide{" "}
            <strong>long-lasting solutions</strong> that make your spaces more
            efficient, organized, and modern.
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
