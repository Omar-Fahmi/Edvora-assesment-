import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Ride from "./components/Rides";
import Filter from "./components/Filter";
import filter from "./components/icons/filter.svg";

const App = () => {
  const [rides] = useState([
    {
      id: '001',
      origin_station_code: 23,
      station_path: [23, 42, 45, 48, 56, 60, 77, 81, 93],
      destination_station_code: 93,
      date: 1644924365,
      map_url: "url",
      state: "Maharashtra",
      city: "Panvel",
    },
    {
      id: '002',
      origin_station_code: 20,
      station_path: [20, 39, 40, 42, 54, 63, 72, 88, 98],
      destination_station_code: 98,
      date: 1644924365,
      map_url: "url",
      state: "Maharashtra",
      city: "Panvel",
    },
    {
      id: '003',
      origin_station_code: 13,
      station_path: [13, 25, 41, 48, 59, 64, 75, 81, 91],
      destination_station_code: 91,
      date: 1644924365,
      map_url: "url",
      state: "Maharashtra",
      city: "Panvel",
    },
  ]);
  const [user] = useState({
    station_code: 40,
    name: "Omar fahmy",
  });
  const [filterOpt, setFilterOpt] = useState(false);

  const handleTab = (e) => {
    e.currentTarget.className = "active";
  };

  return (
    <div>
      <Header user={user} />
      <div className="body">
        <div className="mini-nav">
          <div className="tabs">
            <p onClick={(e) => handleTab(e)} className="active">
              Nearest rides
            </p>
            <p>Upcoming rides</p>
            <p>Past rides</p>
          </div>
          <div onClick={() => setFilterOpt(!filterOpt)} className="filter">
            <img src={filter} alt="filter" />
            Filter
          </div>
        </div>
        {filterOpt && (
          <div className="filterOpt">
            {" "}
            <Filter />{" "}
          </div>
        )}
        {rides.map((ride) => (
          <Ride key={ride.id} ride={ride} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
