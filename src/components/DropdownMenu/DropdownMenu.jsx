import styles from './DropdownMenu.module.css';

function DropdownMenu({ selectedGenre, onSelectedGenreChange, genres }) {
  return (
    <div className={styles.filtersDropdown}>
      <select
        value={selectedGenre}
        onChange={(e) => {
          onSelectedGenreChange(e.target.value);
          console.log(e.target.value);
        }}
      >
        <option key="all" value="">
          All
        </option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre.charAt(0).toUpperCase() + genre.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownMenu;
