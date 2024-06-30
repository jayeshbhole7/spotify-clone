import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer } from './components';
import { Search, Artists, AlbumMetadata, ArtistOverview, AlbumTracks, Albums } from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/albums" component={Albums} />
              <Route path="/albums/:albumId/tracks" component={AlbumTracks} />
              <Route path="/albums/:albumId" component={AlbumMetadata} />
              <Route path="/artists" component={Artists} />
              <Route path="/artists/:artistId/overview" component={ArtistOverview} />
              <Route path="/search" component={Search} />
            </Routes>
          </div>
          {/* <div className="xl:sticky relative top-0 h-fit">
          </div> */}
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
