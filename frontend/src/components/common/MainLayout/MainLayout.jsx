import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main role="main" className="container mx-auto py-16 px-4 flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
