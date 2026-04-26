import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleSubmit = () => {
    navigate("/success", { state: form });
  };

  return (
    <div className="box">
      <h2>Booking Form</h2>

      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Mobile"
        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Booking;