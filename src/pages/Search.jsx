import React, { useState } from 'react';
import { useGetSearchResultsQuery } from '../redux/services/spotifyApi';
import { Loader, Error, AlbumCard, ArtistCard, TrackCard } from '../components';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('album');
  const { data, error, isLoading } = useGetSearchResultsQuery({ query, type: searchType });

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.search.value);
  };

  if (isLoading) return <Loader title="Searching..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col p-6">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Search</h2>
      <form onSubmit={handleSearch} className="flex mb-6">
        <input
          type="text"
          name="search"
          placeholder="Search for albums, artists, or tracks..."
          className="w-full p-3 rounded-l-lg text-black"
        />
        <select
          name="type"
          onChange={(e) => setSearchType(e.target.value)}
          className="p-3 rounded-r-lg text-black"
        >
          <option value="album">Album</option>
          <option value="artist">Artist</option>
          <option value="track">Track</option>
        </select>
        <button type="submit" className="ml-2 p-3 bg-blue-600 text-white rounded-lg">Search</button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {searchType === 'album' && data?.albums?.items.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
        {searchType === 'artist' && data?.artists?.items.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
        {searchType === 'track' && data?.tracks?.items.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default Search;
