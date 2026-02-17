import styles from './DropdownMenu.module.css';

function DropdownMenu({ selectedOption, onSelectOptionChange, options, isSorting = false }) {
  return (
    <div className={styles.filtersDropdown}>
      <select
        value={selectedOption}
        onChange={(e) => {
          onSelectOptionChange(e.target.value);
        }}
      >
        {isSorting ? (
          <option key="default" value="">
            Default
          </option>
        ) : (
          <option key="all" value="">
            All
          </option>
        )}
        {options.map((genre) => (
          <option key={genre} value={genre}>
            {genre.charAt(0).toUpperCase() + genre.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownMenu;
