import { useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import SearchFilters from '../SearchFilters/SearchFilters';
import style from './FilterableMovieList.module.css';
import { useSearchParams } from 'react-router';

function FilterableMovieList({ movies }) {
  const genres = [...new Set(movies.map((movie) => movie.genre))];

  const VALID_SORT_QUERIES = ['', 'rating', 'alphabetical'];

  const [searchParams, setSearchParams] = useSearchParams();

  const filterTitle = searchParams.get('search') ?? '';
  const selectedGenre = searchParams.get('genre') ?? '';
  const sortBy = searchParams.get('order') ?? '';

  useEffect(() => {
    let needsUpdate = false;
    const next = new URLSearchParams(searchParams);

    if (selectedGenre && !genres.includes(selectedGenre)) {
      next.delete('genre');
      needsUpdate = true;
    }

    if (sortBy && !VALID_SORT_QUERIES.includes(sortBy)) {
      next.delete('order');
      needsUpdate = true;
    }

    if (needsUpdate) {
      setSearchParams(next, { replace: true });
    }
  }, [selectedGenre, sortBy, genres, searchParams, setSearchParams]);

  const updateParam = (key, value) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value) {
        next.set(key, value);
      } else {
        next.delete(key);
      }
      return next;
    });
  };

  return (
    <div className={style.movieContainer}>
      <SearchFilters
        filterTitle={filterTitle}
        genres={genres}
        selectedGenre={selectedGenre}
        onFilterTitleChange={(value) => updateParam('search', value)}
        onSelectedGenreChange={(value) => updateParam('genre', value)}
        sortBy={sortBy}
        onSortChange={(value) => updateParam('order', value)}
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
