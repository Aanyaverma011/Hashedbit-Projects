import { movies } from "../data";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>🎬 Movie Booking</h1>
      <h2>Now Showing</h2>

      <div className="grid">
        {movies.map((m, index) => (
          <div
            key={index}
            className="card"
            onClick={() => navigate("/details", { state: m })}
          >
            <img src={m.img} alt="" />
            <p>{m.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;