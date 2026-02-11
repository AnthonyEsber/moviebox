import { useState } from 'react';
import MovieList from '../MovieList/MovieList';
import SearchFilters from '../SearchFilters/SearchFilters';

function FilterableMovieList({ movies }) {
  const genres = [...new Set(movies.map((movie) => movie.genre))];
  const [filterTitle, setFilterTitle] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  return (
    <div>
      <SearchFilters
        filterTitle={filterTitle}
        genres={genres}
        selectedGenre={selectedGenre}
        onFilterTitleChange={setFilterTitle}
        onSelectedGenreChange={setSelectedGenre}
      />
      <MovieList selectedGenre={selectedGenre} filterTitle={filterTitle} movies={movies} />
    </div>
  );
}
export default FilterableMovieList;
