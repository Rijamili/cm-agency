import { useState } from "react";
import axios from "axios";

function Contact() {

  const [form, setForm] = useState({
    name:"",
    phone:"",
    business:"",
    message:""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/contact", form);
      alert("Enquiry Sent Successfully");
    } catch (error) {
      alert("Error sending enquiry");
    }
  };

  return (
    <div style={{padding:"50px"}}>
      <h2>Quick Enquiry</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="business" placeholder="Business Type" onChange={handleChange} />
      <textarea name="message" placeholder="Project Details" onChange={handleChange}></textarea>

      <button onClick={handleSubmit}>Send Enquiry</button>
    </div>
  );
}

export default Contact;