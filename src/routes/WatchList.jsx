import MovieList from '../components/MovieList/MovieList';

function WatchList({ watchList, setWatchList }) {
  return <MovieList watchList={watchList} movies={watchList} setWatchList={setWatchList} />;
}
export default WatchList;
