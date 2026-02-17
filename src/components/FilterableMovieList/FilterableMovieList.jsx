import { useState } from 'react';
import MovieList from '../MovieList/MovieList';
import SearchFilters from '../SearchFilters/SearchFilters';
import style from './FilterableMovieList.module.css';

function FilterableMovieList({ movies }) {
  const genres = [...new Set(movies.map((movie) => movie.genre))];
  const [filterTitle, setFilterTitle] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortBy, setSortBy] = useState('default');

  return (
    <div className={style.movieContainer}>
      <SearchFilters
        filterTitle={filterTitle}
        genres={genres}
        selectedGenre={selectedGenre}
        onFilterTitleChange={setFilterTitle}
        onSelectedGenreChange={setSelectedGenre}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <MovieList
        selectedGenre={selectedGenre}
        filterTitle={filterTitle}
        movies={movies}
        sortBy={sortBy}
      />
    </div>
  );
}
export default FilterableMovieList;
