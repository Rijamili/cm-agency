function Services() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        background: "#020617", // DARK BASE (important)
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "36px", marginBottom: "40px", color: "white" }}>
        Our Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        {[
          "Digital Marketing",
          "Marketing Consultancy",
          "Website Development",
          "Brand Identity",
        ].map((service, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(135deg, #0ea5e9, #9333ea)",
              padding: "25px",
              borderRadius: "15px",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;