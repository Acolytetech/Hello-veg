import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Fruits from "./pages/Fruits";
import Vegetables from "./pages/Vegetables";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import logo from "./img/logo.jpg";
import { FaInstagram, FaPhone, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
        {/* Navbar */}
        <nav className="bg-green-600 text-white p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Hello Veg Logo" className="w-24 h-16 object-cover rounded" />
            </div>

            {/* Hamburger menu (Mobile) */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex font-bold gap-8 text-lg">
              {[
                { to: "/", label: "Home" },
                { to: "/fruits", label: "Fruits" },
                { to: "/vegetables", label: "Vegetables" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact Us" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `hover:text-yellow-300 transition duration-300 ${
                        isActive ? "underline text-yellow-300" : ""
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className=" flex flex-col mt-4 md:hidden gap-3 font-bold text-lg">
              {[
                { to: "/", label: "Home" },
                { to: "/fruits", label: "Fruits" },
                { to: "/vegetables", label: "Vegetables" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact Us" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `hover:text-yellow-300 transition duration-300 ${
                        isActive ? "underline text-yellow-300" : ""
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </nav>

        {/* Page Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fruits" element={<Fruits />} />
            <Route path="/vegetables" element={<Vegetables />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-green-600 text-white px-6 py-8">
          <div className="container mx-auto flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
            <div className="text-center md:text-left">
              <img src={logo} alt="Hello Veg Logo" className="w-28 h-20 object-cover mx-auto md:mx-0 mb-4 rounded" />
              <h2 className="text-2xl">खेत से आपकी थाली तक</h2>
            </div>

            <div>
              <h3 className="text-xl font-extrabold mb-2">Quick Links</h3>
              <ul className="flex flex-col gap-2">
                {[
                  { to: "/", label: "Home" },
                  { to: "/fruits", label: "Fruits" },
                  { to: "/vegetables", label: "Vegetables" },
                  { to: "/about", label: "About Us" },
                  { to: "/contact", label: "Contact Us" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `hover:text-yellow-300 transition duration-300 ${
                          isActive ? "underline text-yellow-300" : ""
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="font-bold flex flex-col gap-4 text-base">
              <h3 className="text-xl font-extrabold">Contact us</h3>
              <a href="tel:+918302394273" className="hover:text-yellow-300 flex items-center gap-2">
                <FaPhone className="text-red-500 w-6 h-6" /> 83023 94273
              </a>
              <a href="https://instagram.com/vinod.choudhary777" target="_blank" rel="noreferrer" className="hover:text-yellow-300 flex items-center gap-2">
                <FaInstagram className="text-red-500 w-6 h-6" /> @vinod.choudhary777
              </a>
              <span className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-red-500 w-6 h-6 mt-1" />
                <span>
                  71A, Street 2, First Block,<br />
                  Setia Colony, Sriganganagar
                </span>
              </span>
            </div>
          </div>

          <p className="text-center mt-6 text-sm">&copy; 2025 Hello Veg. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
