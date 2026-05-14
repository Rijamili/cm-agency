import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mt-20 px-6 md:px-20 pb-10">

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between gap-6">

          {/* LEFT */}
          <div>
            <h2 className="text-xl font-bold mb-2">CM Agency</h2>
            <p className="text-sm text-white/80 max-w-md">
              Premium digital marketing and business growth solutions designed
              to scale your brand and generate real results.
            </p>
          </div>

          {/* RIGHT (SMALL LINKS – NOT NAVBAR STYLE) */}
          <div className="flex flex-wrap gap-4 text-xs text-white/70">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/20 mt-6 pt-4 text-sm text-white/70 text-center">
          © {new Date().getFullYear()} CM Agency • All Rights Reserved
        </div>

      </div>

    </div>
  );
}