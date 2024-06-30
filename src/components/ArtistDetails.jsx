import React from 'react';

const ArtistDetails = ({ artist }) => (
  <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
    <img src={artist.imageUrl} alt={artist.name} className="w-full h-60 object-cover rounded-lg mb-6" />
    <h3 className="text-2xl text-white font-semibold">{artist.name}</h3>
    <p className="text-lg text-gray-400">{artist.genre}</p>
    <p className="mt-2 text-sm text-gray-400">{artist.bio}</p>
  </div>
);

export default ArtistDetails;
