import { NavLink } from 'react-router';
import styles from './Header.module.css';
function Header() {
  return (
    <nav>
      <NavLink className={styles.navLink} to="/">
        Home
      </NavLink>
      <NavLink className={styles.navLink} to="/watchlist">
        Watch List
      </NavLink>
    </nav>
  );
}

export default Header;
