import { Link } from "react-router-dom";
import { useState } from "react";

export default function PortfolioContact() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    business: "",
    details: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      alert(data.message);

      setForm({
        name: "",
        phone: "",
        business: "",
        details: ""
      });

    } catch (error) {
      alert("Error sending enquiry");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] text-white">

      {/* Navbar */}
      <div className="flex justify-between items-center px-8 py-3 bg-white/10 backdrop-blur-md rounded-full mx-10 mt-6 shadow">
        <h2 className="font-semibold text-white">CM Agency</h2>

        <div className="space-x-6 text-sm text-gray-300">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>
      </div>

      {/* Header */}
      <div className="mx-20 mt-10 bg-white/10 backdrop-blur-md p-10 rounded-2xl">
        <h1 className="text-4xl font-bold mb-2 text-white">Portfolio & Contact</h1>
        <p className="text-gray-300">
          A clean client-facing layout that shows trust, past work style,
          and a strong enquiry section.
        </p>
      </div>

      {/* Portfolio */}
      <div className="px-20 py-12">

        <h2 className="text-2xl font-bold mb-6">Selected work style</h2>

        <div className="grid grid-cols-3 gap-6">

         {[
  "Corporate Brand Site",
  "Lead Funnel Landing Page",
  "Luxury Business Profile"
].map((title, i) => (
  <div
    key={i}
    className="relative rounded-xl overflow-hidden group cursor-pointer"
  >
    
    {/* Background Image */}
    <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80 group-hover:opacity-100 transition"></div>

    {/* Overlay Content */}
    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/40 group-hover:bg-black/60 transition">

      <h3 className="font-semibold text-white">{title}</h3>

      <p className="text-gray-300 text-xs">
        Premium structured design for conversions and branding.
      </p>

    </div>

  </div>
))}
        </div>

      </div>

      {/* Testimonial */}
      <div className="px-20">

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-gray-300 text-sm">
          <h3 className="font-semibold mb-2 text-white">
            Client testimonial section
          </h3>

          <p>
            "Very polished presentation. The website feels professional,
            attractive, and trustworthy from the first screen itself."
          </p>

          <p className="mt-2 text-xs">— Example client feedback block</p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="px-20 py-12 grid grid-cols-2 gap-8">

        {/* Left */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 rounded-2xl">

          <h2 className="text-2xl font-bold mb-3">
            Let’s Build Your Brand
          </h2>

          <p className="text-gray-100 text-sm mb-6">
            This is the kind of enquiry area that makes the website feel real
            and ready.
          </p>

          <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition">
            Start a Project
          </button>

        </div>

        {/* Right Form */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">

          <h3 className="font-semibold mb-4 text-white">Quick Enquiry</h3>

          <div className="space-y-3">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone / WhatsApp"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400"
            />

            <input
              name="business"
              value={form.business}
              onChange={handleChange}
              placeholder="Business Type"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400"
            />

            <input
              name="details"
              value={form.details}
              onChange={handleChange}
              placeholder="Project Details"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400"
            />

            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-500 to-purple-600 w-full py-3 rounded-lg text-white hover:scale-105 transition"
            >
              Send Enquiry
            </button>

          </div>

        </div>

      </div>

      {/* Footer */}
      <p className="text-xs text-gray-400 px-20 pb-10">
        CM Agency • by COSTARMARKETING MANAGEMENT
      </p>

    </div>
  );
}