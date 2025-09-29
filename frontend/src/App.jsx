import AboutUsPage from "./components/Pages/About-Us/AboutUsPage";
import ContactUsPage from "./components/pages/Contact-Us/ContactUsPage";
import HomePage from "./components/Pages/Home/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
    </Routes>
  );
};

export default App;
