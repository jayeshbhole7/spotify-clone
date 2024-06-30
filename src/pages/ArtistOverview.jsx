import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetArtistOverviewQuery } from '../redux/services/spotifyApi';
import { Loader, Error, ArtistDetails } from '../components';

const ArtistOverview = () => {
  const { artistId } = useParams();
  const { data, error, isLoading } = useGetArtistOverviewQuery(artistId);

  if (isLoading) return <Loader title="Loading artist overview..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col p-6">
      <ArtistDetails artist={data} />
    </div>
  );
};

export default ArtistOverview;
