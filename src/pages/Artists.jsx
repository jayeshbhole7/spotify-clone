import React from 'react';
import { useGetArtistsQuery } from '../redux/services/spotifyApi';
import { Loader, Error, ArtistCard } from '../components';

const Artists = () => {
  const { data, error, isLoading } = useGetArtistsQuery();

  if (isLoading) return <Loader title="Loading artists..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col p-6">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Artists</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.artists?.map((artist, i) => (
          <ArtistCard key={artist.id} artist={artist} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Artists;
