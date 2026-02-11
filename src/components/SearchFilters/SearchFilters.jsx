import DropdownMenu from '../DropdownMenu/DropdownMenu';

function SearchFilters({
  genres,
  filterTitle,
  onFilterTitleChange,
  selectedGenre,
  onSelectedGenreChange,
}) {
  return (
    <div className="movies-search">
      <form>
        <span>BROWSE BY GENGRE</span>
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
