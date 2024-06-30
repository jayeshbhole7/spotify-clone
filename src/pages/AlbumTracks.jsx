import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetAlbumTracksQuery } from '../redux/services/spotifyApi';
import { Loader, Error, TrackCard } from '../components';

const AlbumTracks = () => {
  const { albumId } = useParams();
  const { data, error, isLoading } = useGetAlbumTracksQuery(albumId);

  if (isLoading) return <Loader title="Loading album tracks..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col p-6">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Album Tracks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.tracks?.map((track, i) => (
          <TrackCard key={track.id} track={track} i={i} />
        ))}
      </div>
    </div>
  );
};

export default AlbumTracks;
