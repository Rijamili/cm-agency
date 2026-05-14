import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at top right, rgba(255,200,0,0.2), transparent 35%),
          radial-gradient(circle at bottom left, rgba(0,120,255,0.15), transparent 40%),
          linear-gradient(135deg, #0b1f3a, #08162a, #020617)
        `
      }}
    >

      {/* NAVBAR */}
      <div className="mx-3 md:mx-6 lg:mx-10 mt-4 md:mt-6">

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full px-4 md:px-6 py-3 md:py-4 flex flex-col md:flex-row justify-between items-center gap-3 shadow-lg">

          {/* LOGO */}
          <h2 className="font-semibold text-white tracking-wide text-lg">
            CM Agency
          </h2>

          {/* NAV LINKS */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-8 text-[11px] md:text-sm text-white/90">

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

        </div>

      </div>


      {/* HERO SECTION */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-8 lg:px-20 py-10 md:py-14 lg:py-20 gap-12">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[55%] text-center lg:text-left">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
            Grow Your Business
            <br />
            with Smart Digital
          </h1>

          <p className="mt-6 text-gray-200 max-w-xl text-sm md:text-base leading-relaxed mx-auto lg:mx-0">
            CM Agency helps businesses scale with premium branding,
            performance marketing, lead generation, and high-converting
            website experiences.
          </p>


          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">

            <button className="bg-yellow-400 text-black px-4 md:px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition">
              Get Consultation
            </button>

           <Link
  to="/services"
  className="bg-white text-black px-8 py-4 rounded-xl font-semibold inline-block hover:scale-105 transition"
>
  View Services
</Link>

          </div>

        </div>


        {/* RIGHT CARD */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-5 md:p-6 rounded-2xl w-full max-w-full md:max-w-sm shadow-2xl">

          {/* TOP STATS */}
          <div className="flex justify-between text-xs md:text-sm mb-5">

            <div>
              <p>Reach</p>
              <b>124K</b>
            </div>

            <div>
              <p>Leads</p>
              <b>+340</b>
            </div>

            <div>
              <p>ROI</p>
              <b>3.8x</b>
            </div>

          </div>


          {/* GRAPH AREA */}
          <div className="h-28 md:h-32 bg-white/20 rounded-lg relative overflow-hidden">

            <div className="absolute bottom-2 left-4 w-2 h-12 bg-white rounded"></div>

            <div className="absolute bottom-2 left-10 w-2 h-16 bg-white rounded"></div>

            <div className="absolute bottom-2 left-16 w-2 h-20 bg-white rounded"></div>

          </div>

        </div>

      </div>


      {/* TAG BAR */}
      <div className="mx-4 md:mx-8 lg:mx-20">

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-4 md:px-6 rounded-full flex flex-wrap justify-center gap-3 md:gap-8 text-[11px] md:text-sm shadow-md">

          {[
            "Premium Branding",
            "Lead Generation",
            "Corporate Design",
            "Results Focused"
          ].map((item, i) => (

            <span
              key={i}
              className="flex items-center gap-2"
            >

              <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>

              {item}

            </span>

          ))}

        </div>

      </div>


      {/* SERVICES SECTION */}
      <div className="px-4 md:px-8 lg:px-20 py-14 lg:py-20">

        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center lg:text-left">
          Our Core Services
        </h2>

        <p className="text-gray-300 mb-10 max-w-md text-sm md:text-base text-center lg:text-left mx-auto lg:mx-0">
          Modern agency-style sections designed to make clients feel trust,
          clarity, and confidence instantly.
        </p>


        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {[
            "Digital Marketing",
            "Marketing Consultancy",
            "Website Development",
            "Brand Identity"
          ].map((title, i) => (

            <div
              key={i}
              className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 md:p-6 rounded-2xl shadow-lg hover:scale-105 transition"
            >

              <div className="flex items-center gap-3 mb-3">

                <FaCircle className="text-yellow-300 text-sm" />

                <h3 className="font-semibold text-base md:text-lg">
                  {title}
                </h3>

              </div>

              <p className="text-gray-100 text-sm leading-relaxed">
                Premium solutions designed to grow your business
                effectively with modern branding and strategy.
              </p>

            </div>

          ))}

        </div>

      </div>


      {/* LAST SECTION */}
      <div className="px-4 md:px-8 lg:px-20 pb-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* LEFT CARD */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-5 md:p-6 rounded-2xl shadow-md">

            <h3 className="font-semibold mb-4 text-base md:text-lg">
              Why clients trust us
            </h3>

            <ul className="text-sm text-gray-100 space-y-3">

              <li className="flex gap-2">
                <span className="text-yellow-300">●</span>
                Professional brand presentation
              </li>

              <li className="flex gap-2">
                <span className="text-yellow-300">●</span>
                Performance-driven strategy
              </li>

              <li className="flex gap-2">
                <span className="text-yellow-300">●</span>
                Premium structure
              </li>

            </ul>

          </div>


          {/* RIGHT CARD */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-5 md:p-6 rounded-2xl shadow-md">

            <h3 className="text-yellow-300 font-semibold mb-2 text-base md:text-lg">
              Digital Marketing & Business Growth
            </h3>

            <p className="text-gray-100 text-sm leading-relaxed">
              Brand presentation backed by
              COSTARMARKETING MANAGEMENT.
            </p>

          </div>

        </div>


        {/* FOOTER */}
        <div className="mt-10 border-t border-white/20"></div>

        <p className="mt-3 text-xs text-gray-400 text-center md:text-left">
          CM Agency • by COSTARMARKETING MANAGEMENT
        </p>

      </div>

    </div>
  );
}