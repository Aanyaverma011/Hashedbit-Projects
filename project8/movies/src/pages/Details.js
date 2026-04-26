import { useLocation, useNavigate } from "react-router-dom";

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state;

  if (!movie) return <h2>No movie selected</h2>;

  return (
    <div className="box">
      <h2>{movie.name}</h2>
      <img src={movie.img} className="poster" alt="" />

      <br /><br />
      <button onClick={() => navigate("/booking", { state: movie })}>
        Book Seat
      </button>
    </div>
  );
}

export default Details;