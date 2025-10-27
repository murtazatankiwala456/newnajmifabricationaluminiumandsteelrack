import AboutUsPage from "./components/Pages/About-Us/AboutUsPage";
import ContactUsPage from "./components/pages/Contact-Us/ContactUsPage";
import HomePage from "./components/pages/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductDetailPage from "./components/pages/Product-Detail/ProductDetailPage.jsx";
import AdminLoginPage from "./components/pages/Admin/Auth/AdminLoginPage";
import AdminHomePage from "./components/pages/Admin/AdminHome/AdminHomePage.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/admin" element={<AdminLoginPage />} />
      <Route
        path="/admin/home"
        element={
          <ProtectedRoute>
            <AdminHomePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
