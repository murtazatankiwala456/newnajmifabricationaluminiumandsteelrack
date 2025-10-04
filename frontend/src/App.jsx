import AboutUsPage from "./components/Pages/About-Us/AboutUsPage";
import ContactUsPage from "./components/pages/Contact-Us/ContactUsPage";
import HomePage from "./components/pages/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductDetailPage from "./components/pages/Product-Detail/ProductDetailPage.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
    </Routes>
  );
};

export default App;
