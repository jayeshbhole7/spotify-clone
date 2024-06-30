import React from 'react';

const AlbumCard = ({ album }) => (
  <div className="bg-gray-900 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
    <img src={album.images[0]?.url} alt={album.name} className="w-full h-60 object-cover rounded-lg mb-4" />
    <h3 className="text-lg text-white font-semibold">{album.name}</h3>
    <p className="text-sm text-gray-400">{album.artists[0].name}</p>
  </div>
);

export default AlbumCard;
