import DropdownMenu from '../DropdownMenu/DropdownMenu';
import style from './SearchFilters.module.css';

function SearchFilters({
  genres,
  filterTitle,
  onFilterTitleChange,
  selectedGenre,
  onSelectedGenreChange,
}) {
  return (
    <div className={style.movieSearch}>
      <form>
        <span>BROWSE BY GENRE</span>
        <DropdownMenu
          selectedGenre={selectedGenre}
          onSelectedGenreChange={onSelectedGenreChange}
          genres={genres}
        />
        <span>FIND A FILM</span>
        <input
          type="text"
          value={filterTitle}
          onChange={(e) => onFilterTitleChange(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchFilters;
