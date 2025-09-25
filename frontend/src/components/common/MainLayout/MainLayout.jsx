import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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
