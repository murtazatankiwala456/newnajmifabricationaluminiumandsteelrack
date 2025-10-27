import AdminHeader from "../../Headers/AdminHeader/AdminHeader";
import Footer from "../../Footer/Footer";
const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminHeader />
      <main role="main" className="container mx-auto py-16 px-4 flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default AdminLayout;
