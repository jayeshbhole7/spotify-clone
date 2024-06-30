import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetAlbumMetadataQuery } from '../redux/services/spotifyApi';
import { Loader, Error, AlbumDetails } from '../components';

const AlbumMetadata = () => {
  const { albumId } = useParams();
  const { data, error, isLoading } = useGetAlbumMetadataQuery(albumId);

  if (isLoading) return <Loader title="Loading album metadata..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col p-6">
      <AlbumDetails album={data} />
    </div>
  );
};

export default AlbumMetadata;
