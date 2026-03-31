function Navbar() {
  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"20px"}}>
      <h2>CM Agency</h2>
      <div>
        <a>Home</a> | <a>Services</a> | <a>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;