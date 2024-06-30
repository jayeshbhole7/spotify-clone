import React from 'react';

const AlbumDetails = ({ album }) => (
  <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
    <img src={album.coverUrl} alt={album.title} className="w-full h-60 object-cover rounded-lg mb-6" />
    <h3 className="text-2xl text-white font-semibold">{album.title}</h3>
    <p className="text-lg text-gray-400">{album.artist}</p>
    <p className="mt-2 text-sm text-gray-400">{album.releaseDate}</p>
  </div>
);

export default AlbumDetails;
