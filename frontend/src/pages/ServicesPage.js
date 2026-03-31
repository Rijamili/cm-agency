import { FaBullhorn, FaChartLine, FaCode, FaPalette } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] text-white">

      {/* Navbar */}
      <div className="flex justify-between items-center px-8 py-3 bg-white/10 backdrop-blur-md rounded-full mx-10 mt-6 shadow">
        <h2 className="font-semibold">CM Agency</h2>

        <div className="space-x-6 text-sm text-gray-300">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>
      </div>

      {/* Header */}
      <div className="mx-20 mt-10 bg-white/10 backdrop-blur-md p-10 rounded-2xl text-gray-300">
        Strategic solutions designed to build authority, trust, and business growth.
      </div>

      {/* Services Section */}
      <div className="px-20 py-16">

        <h2 className="text-3xl font-bold mb-10">
          What CM Agency can do for your business
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            { title: "Digital Marketing", icon: <FaBullhorn /> },
            { title: "SEO & Analytics", icon: <FaChartLine /> },
            { title: "Website Development", icon: <FaCode /> },
            { title: "Brand Identity", icon: <FaPalette /> },
            { title: "Marketing Strategy", icon: <FaChartLine /> },
            { title: "Consultancy", icon: <FaBullhorn /> }
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 hover:scale-105 transition duration-300 shadow-lg cursor-pointer"
            >
              <div className="text-3xl mb-3">{service.icon}</div>

              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-gray-100">
                Improve visibility, campaigns, and branding with premium strategy.
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* Stats Section */}
      <div className="px-20 pb-10">

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">

          <h3 className="mb-6 font-semibold text-gray-300">
            Results style section
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              { value: "124K", label: "Monthly reach" },
              { value: "+340", label: "Qualified leads" },
              { value: "3.8x", label: "Campaign ROI" }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 p-6 rounded-xl text-center hover:scale-105 transition"
              >
                <h2 className="text-xl font-bold">{item.value}</h2>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="px-20 pb-20">

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 rounded-2xl">

          <h2 className="text-2xl font-bold mb-2">
            Start Your Digital Growth Today
          </h2>

          <p className="text-gray-100 text-sm">
            Professional strategy. Premium presentation. Real business growth.
          </p>

        </div>

        <p className="text-xs text-gray-400 mt-4">
          CM Agency • Services page
        </p>

      </div>

    </div>
  );
}