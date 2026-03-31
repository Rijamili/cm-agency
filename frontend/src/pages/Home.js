import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: `
          radial-gradient(circle at top right, rgba(255,200,0,0.2), transparent 35%),
          radial-gradient(circle at bottom left, rgba(0,120,255,0.15), transparent 40%),
          linear-gradient(135deg, #0b1f3a, #08162a, #020617)
        `
      }}
    >

      {/* NAVBAR (FIXED PREMIUM) */}
      <div className="mx-10 mt-6">
  <div className="flex justify-between items-center px-8 py-3 
  bg-gradient-to-r from-blue-500/90 to-purple-600/90 
  backdrop-blur-lg rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)]">

    <h2 className="font-semibold text-white tracking-wide">
      CM Agency
    </h2>

    <div className="flex items-center gap-8 text-sm text-white/90">

      <Link to="/" className="hover:text-yellow-300 transition">
        Home
      </Link>

      <Link to="/services" className="hover:text-yellow-300 transition">
        Services
      </Link>

      <a className="hover:text-yellow-300 transition">
        About
      </a>

      <Link to="/portfolio" className="hover:text-yellow-300 transition">
        Portfolio
      </Link>

      <a className="hover:text-yellow-300 transition">
        Contact
      </a>

    </div>

  </div>
</div>

      {/* HERO */}
      <div className="flex justify-between items-center px-20 py-20">

        <div className="w-[55%]">
          <h1 className="text-6xl font-extrabold leading-tight">
            Grow Your Business <br />
            with Smart Digital
          </h1>

          <p className="mt-6 text-gray-200 max-w-lg">
            CM Agency helps businesses scale with premium branding,
            performance marketing, lead generation, and high-converting
            website experiences.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-md">
              Get Consultation
            </button>

            <button className="bg-white text-black px-6 py-3 rounded-lg shadow">
              View Services
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-2xl w-80 shadow-2xl">
          <div className="flex justify-between text-sm mb-4">
            <div><p>Reach</p><b>124K</b></div>
            <div><p>Leads</p><b>+340</b></div>
            <div><p>ROI</p><b>3.8x</b></div>
          </div>

          <div className="h-32 bg-white/20 rounded-lg relative">
            <div className="absolute bottom-2 left-4 w-2 h-12 bg-white rounded"></div>
            <div className="absolute bottom-2 left-10 w-2 h-16 bg-white rounded"></div>
            <div className="absolute bottom-2 left-16 w-2 h-20 bg-white rounded"></div>
          </div>
        </div>

      </div>

      {/* MIDDLE STRIP (FIXED PREMIUM) */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mx-20 py-4 px-6 rounded-full flex justify-center gap-10 text-sm shadow-md">

  {["Premium Branding","Lead Generation","Corporate Design","Results Focused"].map((item,i)=>(
    <span key={i} className="flex items-center gap-2">
      <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
      {item}
    </span>
  ))}

</div>

      {/* SERVICES */}
      <div className="px-20 py-20">

        <h2 className="text-3xl font-bold mb-3">Our Core Services</h2>

        <p className="text-gray-300 mb-10 max-w-md">
          Modern agency-style sections designed to make clients feel trust,
          clarity, and confidence instantly.
        </p>

        <div className="grid grid-cols-2 gap-8">

          {[
            "Digital Marketing",
            "Marketing Consultancy",
            "Website Development",
            "Brand Identity"
          ].map((title, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <FaCircle className="text-yellow-300"/>
                <h3 className="font-semibold">{title}</h3>
              </div>

              <p className="text-gray-100 text-sm">
                Premium solutions designed to grow your business effectively.
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* LAST SECTION */}
      <div className="px-20 pb-16">

        <div className="grid grid-cols-2 gap-8">

          <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold mb-4">Why clients trust us</h3>

            <ul className="text-sm text-gray-100 space-y-2">
              <li className="flex gap-2"><span className="text-yellow-300">●</span> Professional brand presentation</li>
              <li className="flex gap-2"><span className="text-yellow-300">●</span> Performance-driven strategy</li>
              <li className="flex gap-2"><span className="text-yellow-300">●</span> Premium structure</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl shadow-md">
            <h3 className="text-yellow-300 font-semibold mb-2">
              Digital Marketing & Business Growth
            </h3>

            <p className="text-gray-100 text-sm">
              Brand presentation backed by COSTARMARKETING MANAGEMENT.
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-white/20"></div>

        <p className="mt-3 text-xs text-gray-400">
          CM Agency • by COSTARMARKETING MANAGEMENT
        </p>

      </div>

    </div>
  );
}