const Footer = () => {
  return (
    <footer
      class="bg-primary py-6 mt-16"
      role="contentinfo"
      aria-label="Footer"
      tabIndex="-1"
    >
      <div class="container mx-auto text-center">
        <p class="text-white">
          © Copyright
          <a
            href="https://www.linkedin.com/in/murtaza-tankiwala-486782268/"
            target="_blank"
            className="hover:text-gray-200 ms-2"
          >
            Murtaza Tankiwala
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
