import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-4">

      {/* NAVBAR CONTAINER */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full px-6 py-4 flex items-center justify-between shadow-lg">

        {/* LOGO */}
        <Link
          to="/"
          className="text-white font-bold text-lg md:text-2xl"
        >
          CM Agency
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">

          <Link
            to="/"
            className="hover:text-yellow-300 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-yellow-300 transition"
          >
            About
          </Link>

          <Link
            to="/services"
            className="hover:text-yellow-300 transition"
          >
            Services
          </Link>

          <Link
            to="/portfolio"
            className="hover:text-yellow-300 transition"
          >
            Portfolio
          </Link>

          <Link
            to="/contact"
            className="hover:text-yellow-300 transition"
          >
            Contact
          </Link>

        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="md:hidden mt-3 bg-[#0f172a] rounded-2xl p-5 flex flex-col gap-4 text-white shadow-xl">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-300"
          >
            About
          </Link>

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-300"
          >
            Services
          </Link>

          <Link
            to="/portfolio"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-300"
          >
            Portfolio
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-300"
          >
            Contact
          </Link>

        </div>

      )}

    </div>

  );
}