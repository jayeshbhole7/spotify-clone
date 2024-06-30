import React from 'react';

const TrackCard = ({ track }) => (
  <div className="bg-gray-900 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
    <h3 className="text-lg text-white font-semibold">{track.name}</h3>
    <p className="text-sm text-gray-400">{track.artists[0].name}</p>
  </div>
);

export default TrackCard;
