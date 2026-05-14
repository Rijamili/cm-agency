import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Portfolio() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    business: "",
    details: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
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

    <div className="min-h-screen overflow-x-hidden text-white bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b]">

      {/* NAVBAR */}
      <Navbar />



      {/* HERO SECTION */}
      <div className="px-4 md:px-10 lg:px-20 pt-28 pb-10">

        <div className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-lg">

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Portfolio & Contact
          </h1>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            A clean client-facing layout that shows trust,
            past work style, and a strong enquiry section.
          </p>

        </div>

      </div>



      {/* PORTFOLIO SECTION */}
      <div className="px-4 md:px-10 lg:px-20 pb-16">

        <h2 className="text-2xl md:text-4xl font-bold mb-8">
          Selected Work Style
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {[
            {
              title: "Corporate Brand Site",
              desc: "Premium structured design for conversions and branding."
            },

            {
              title: "Lead Funnel Landing Page",
              desc: "Built to capture enquiries through offers and CTA sections."
            },

            {
              title: "Luxury Business Profile",
              desc: "Elegant design language with stronger authority and trust."
            }

          ].map((item, i) => (

            <div
              key={i}
              className="bg-white/10 rounded-2xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300"
            >

              {/* IMAGE AREA */}
              <div className="h-44 bg-gradient-to-br from-blue-500 to-purple-600"></div>


              {/* CONTENT */}
              <div className="p-5">

                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>



      {/* TESTIMONIAL */}
      <div className="px-4 md:px-10 lg:px-20 pb-16">

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8">

          <h3 className="text-2xl font-bold mb-4">
            Client Testimonial
          </h3>

          <p className="text-gray-300 italic leading-relaxed">
            “Very polished presentation. The website feels professional,
            attractive, and trustworthy from the first screen itself.”
          </p>

        </div>

      </div>



      {/* CONTACT SECTION */}
      <div className="px-4 md:px-10 lg:px-20 pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT SECTION */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 md:p-10 flex flex-col justify-center">

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Let’s Build Your Brand
            </h2>

            <p className="text-white/90 leading-relaxed mb-8 text-sm md:text-base">
              This is the kind of enquiry area that makes the
              website feel real and ready. A visitor can trust
              the brand and contact the agency immediately.
            </p>

            <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl hover:scale-105 transition w-fit">
              Start a Project
            </button>

          </div>



          {/* RIGHT FORM */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8">

            <h3 className="text-2xl font-bold mb-6">
              Quick Enquiry
            </h3>


            <div className="space-y-4">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-4 rounded-xl bg-[#1e293b] border border-white/10 outline-none text-white"
              />


              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone / WhatsApp"
                className="w-full p-4 rounded-xl bg-[#1e293b] border border-white/10 outline-none text-white"
              />


              <input
                type="text"
                name="business"
                value={form.business}
                onChange={handleChange}
                placeholder="Business Type"
                className="w-full p-4 rounded-xl bg-[#1e293b] border border-white/10 outline-none text-white"
              />


              <textarea
                rows="4"
                name="details"
                value={form.details}
                onChange={handleChange}
                placeholder="Project Details"
                className="w-full p-4 rounded-xl bg-[#1e293b] border border-white/10 outline-none text-white"
              ></textarea>


              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
              >

                Send Enquiry

              </button>

            </div>

          </div>

        </div>

      </div>



      {/* FOOTER */}
      <Footer />

    </div>

  );
}