import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contact() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <div
      className="min-h-screen text-white
      bg-gradient-to-br from-[#020617]
      via-[#0f172a] to-[#1e293b]"
    >

      {/*  NAVBAR  */}

      <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 pt-4">

        <div
          className="flex items-center justify-between
          px-5 md:px-10 py-4 rounded-full
          bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
        >

          {/* LOGO */}
          <h2 className="font-bold text-lg md:text-2xl text-white">
            CM Agency
          </h2>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm text-white">

            <Link to="/" className="hover:text-yellow-300 transition">
              Home
            </Link>

            <Link to="/about" className="hover:text-yellow-300 transition">
              About
            </Link>

            <Link to="/services" className="hover:text-yellow-300 transition">
              Services
            </Link>

            <Link to="/portfolio" className="hover:text-yellow-300 transition">
              Portfolio
            </Link>

            <Link to="/contact" className="hover:text-yellow-300 transition">
              Contact
            </Link>

          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-3xl text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (

          <div
            className="md:hidden mt-3 rounded-2xl
            bg-[#0f172a] p-5 flex flex-col gap-4 shadow-xl"
          >

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>

            <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

          </div>

        )}

      </div>

      {/*  PAGE CONTENT  */}

      <div className="pt-32 px-4 sm:px-6 md:px-20 py-10">

        {/* TITLE */}
        <h1
          className="text-3xl sm:text-4xl
          font-bold mb-10 text-center md:text-left"
        >
          Contact Us
        </h1>

        {/* CONTACT CARD */}
        <div
          className="bg-white/10 backdrop-blur-md
          p-5 sm:p-8 rounded-2xl shadow-xl
          max-w-5xl mx-auto"
        >

          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Let’s Build Your Brand Presence
          </h2>

          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            Company: COSTAR MARKETING MANAGEMENT L.L.C
          </p>

          {/* DETAILS */}
          <div
            className="text-gray-300
            space-y-2 mb-8 text-sm sm:text-base"
          >
            <p>License No: 2645097.01</p>
            <p>Location: Sharjah Media City, UAE</p>
            <p>Phone / WhatsApp: +971 52 503 3272</p>
            <p>Email: costargroups1@gmail.com</p>
          </div>

          {/* FORM */}
          <div className="grid grid-cols-1 gap-4">

            {[
              "Full Name",
              "Phone / WhatsApp",
              "Business Type",
              "Services Needed",
              "Monthly Budget"
            ].map((label, i) => (

              <div key={i}>

                <label className="block mb-2 text-sm text-gray-300">
                  {label}
                </label>

                <input
                  type="text"
                  placeholder={`Enter ${label}`}
                  className="
                    w-full
                    bg-transparent
                    border border-gray-500
                    rounded-lg
                    px-4 py-3
                    outline-none
                    text-white
                    placeholder-gray-400
                  "
                />

              </div>

            ))}

          </div>

          {/* BUTTON */}
          <button
            className="
              mt-8
              w-full sm:w-auto
              bg-gradient-to-r
              from-blue-500
              to-purple-600
              px-8 py-3
              rounded-xl
              hover:scale-105
              transition
              font-semibold
            "
          >
            Send Enquiry
          </button>

        </div>

      </div>

    </div>

  );
}