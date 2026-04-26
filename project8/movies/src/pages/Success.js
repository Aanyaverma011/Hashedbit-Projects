import { useLocation } from "react-router-dom";

function Success() {
  const location = useLocation();
  const user = location.state;

  const id = Math.floor(Math.random() * 100000);

  if (!user) return <h2>No booking found</h2>;

  return (
    <div className="box">
      <h2>✅ Seat Booked</h2>

      <p>
        🎟 Booking ID: {id} <br /><br />
        Name: {user.name} <br />
        Email: {user.email} <br />
        Mobile: {user.mobile}
      </p>
    </div>
  );
}

export default Success;