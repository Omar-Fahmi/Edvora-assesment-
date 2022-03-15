import React from "react";
import map from './icons/map.png'

const Ride = ({ ride, user }) => {
  const { id, origin_station_code, station_path, date } = ride;

  const distance = station_path.filter(code => code >= user.station_code)[0] - user.station_code;

  return (
    <div className="ride">
      <img src={map} alt="map url" />
      <div className="details">
        <p>
          <span className="det">Ride Id </span>: {id}
        </p>
        <p>
          <span className="det">Origin Station </span>: {origin_station_code}
        </p>
        <p>
          <span className="det">Station Path </span>: {JSON.stringify(station_path)}
        </p>
        <p>
          <span className="det">Date </span>: {date}
        </p>
        <p>
          <span className="det">Distance </span>: {distance}
        </p>
      </div>
    </div>
  );
};

export default Ride;
