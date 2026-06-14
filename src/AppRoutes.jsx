import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Menu,
  Services,
  PageNotFound,
  AllergyAdvice,
  MenuDetails,Cart
} from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/menu/:id" element={<MenuDetails />} />
      <Route path="/allergy-advice" element={<AllergyAdvice />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
