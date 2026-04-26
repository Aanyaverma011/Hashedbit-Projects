import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [teams, setTeams] = useState([]);

  const url = "https://my-json-server.typicode.com/FreSauce/json-ipl/data";

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      // sort by NRR
      data.sort((a, b) => a.NRR - b.NRR);

      setTeams(data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>IPL 2022 Points Table</h2>

      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;