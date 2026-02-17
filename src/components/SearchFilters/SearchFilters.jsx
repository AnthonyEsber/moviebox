import DropdownMenu from '../DropdownMenu/DropdownMenu';
import style from './SearchFilters.module.css';

function SearchFilters({
  genres,
  filterTitle,
  onFilterTitleChange,
  selectedGenre,
  onSelectedGenreChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className={style.movieSearch}>
      <form>
        <span>BROWSE BY GENRE</span>
        <DropdownMenu
          selectedOption={selectedGenre}
          onSelectOptionChange={onSelectedGenreChange}
          options={genres}
        />
        <span>FIND A FILM</span>
        <input
          type="text"
          value={filterTitle}
          onChange={(e) => onFilterTitleChange(e.target.value)}
        />
        <span>SORTY BY</span>
        <DropdownMenu
          selectedOption={sortBy}
          onSelectOptionChange={onSortChange}
          options={['rating', 'alphabetical']}
          isSorting
        />
      </form>
    </div>
  );
}

export default SearchFilters;
