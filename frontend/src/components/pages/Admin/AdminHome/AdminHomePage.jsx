import AdminLayout from "../../../common/Layout/AdminLayout/AdminLayout";
import MainLogo from "/images/mainlogo.png";
const AdminHomePage = () => {
  return (
    <>
      <AdminLayout>
        <div className="flex items-center justify-center">
          <img src={MainLogo} alt="main logo" className="w-xl" />
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminHomePage;
