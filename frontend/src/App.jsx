import AboutUsPage from "./components/Pages/About-Us/AboutUsPage";
import ContactUsPage from "./components/pages/Contact-Us/ContactUsPage";
import HomePage from "./components/pages/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductDetailPage from "./components/pages/Product-Detail/ProductDetailPage.jsx";
import AdminLoginPage from "./components/pages/Admin/Auth/AdminLoginPage";
import AdminHomePage from "./components/pages/Admin/AdminHome/AdminHomePage.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import UploadProductPage from "./components/pages/Admin/AdminProduct/UploadProduct/UploadProductPage.jsx";
import ProductTablePage from "./components/pages/Admin/AdminProduct/Products/ProductTablePage.jsx";
import UpdateProductPage from "./components/pages/Admin/AdminProduct/UpdateProduct/UpdateProductPage.jsx";
import ContactInqueriesPage from "./components/pages/Admin/AdminContactsInqueries/ContactInqueriesPage.jsx";

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
      <Route
        path="/admin/upload-product"
        element={
          <ProtectedRoute>
            <UploadProductPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/products"
        element={
          <ProtectedRoute>
            <ProductTablePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/update-product"
        element={
          <ProtectedRoute>
            <UpdateProductPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/contact-inqueries"
        element={
          <ProtectedRoute>
            <ContactInqueriesPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
