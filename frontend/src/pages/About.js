import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden text-white bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b]">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16 pt-24 md:pt-28">

        {/* ABOUT */}
        <section>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left">
            Who We Are
          </h1>

          <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg">

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              COSTARMARKETING is a premium digital marketing and business
              growth agency focused on helping brands scale through strategic
              marketing, lead generation, branding, and high-converting
              digital experiences.
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We combine modern design, performance marketing, and
              consultancy-driven execution to help businesses build trust,
              generate quality leads, and increase long-term revenue.
            </p>

          </div>

        </section>


        {/* WHY CHOOSE US */}
        <section className="mt-14">

          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {[
              "Premium brand-focused strategy",
              "High-converting landing pages",
              "Performance marketing experts",
              "Lead generation systems",
              "Corporate-level presentation",
              "UAE market understanding",
              "Conversion-driven website design"
            ].map((item, i) => (

              <div
                key={i}
                className="bg-gradient-to-br from-blue-500 to-purple-600 p-5 rounded-xl shadow-md hover:scale-105 transition duration-300 text-sm sm:text-base"
              >

                {item}

              </div>

            ))}

          </div>

        </section>


        {/* MISSION */}
        <section className="mt-14">

          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">
            Our Mission
          </h2>

          <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg">

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              To help businesses grow faster with smart digital systems,
              trusted branding, and result-oriented marketing strategies.
            </p>

          </div>

        </section>

      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}