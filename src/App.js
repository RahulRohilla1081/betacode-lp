import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/AppDrawer/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard/Dashboard";
import Testing from "./Testing";
import Products from "./screens/Products/Products";
import ContactUs from "./screens/ContactUs/ContactUs";
import AboutUs from "./screens/AboutUs/AboutUs";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/product"} element={<Products />} />
        <Route path={"/contact-us"} element={<ContactUs />} />
        <Route path={"/about-us"} element={<AboutUs />} />
        <Route path={"/testing"} element={<Testing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
