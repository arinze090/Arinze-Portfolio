import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ArinzeLogo from "../../assets/images/arinze.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const toggleNav = () => setIsActive(!isActive);
  const closeNav = () => setIsActive(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 600 });
  }, []);

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    // { label: "Publications", path: "/blog" },
    { label: "Proficiencies", path: "/proficiencies" },
  ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-sm transition-all duration-300"
      data-aos="fade-down"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-white">
          <Link to="/" onClick={closeNav}>
            <img
              src={ArinzeLogo}
              alt="Arinze Logo"
              className="h-14 w-auto rounded-lg object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-white">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={closeNav}
              className={`hover:text-blue-400 transition ${
                isActiveLink(path) ? "text-blue-500 font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={toggleNav}
          className="md:hidden z-50 flex flex-col justify-center items-center space-y-1"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              isActive ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isActive ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              isActive ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 right-0 h-full w-2/4 max-w-sm  bg-black/80 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out ${
          isActive ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        <ul className="flex flex-col items-start p-8 space-y-6 text-lg text-white">
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                onClick={closeNav}
                className={`block ${
                  isActiveLink(path) ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isActive && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeNav}
        />
      )}
    </header>
  );
};

export default Header;
