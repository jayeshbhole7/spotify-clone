import React from 'react';
import { useGetAlbumsQuery } from '../redux/services/spotifyApi';
import { Loader, Error, AlbumCard } from '../components';

const Albums = () => {
  const { data, error, isLoading } = useGetAlbumsQuery();

  if (isLoading) return <Loader title="Loading albums..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col p-6">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Albums</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.albums?.map((album, i) => (
          <AlbumCard key={album.id} album={album} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Albums;
