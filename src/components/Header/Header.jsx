import { NavLink } from 'react-router';
import styles from './Header.module.css';
function Header() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
        to="/"
        end
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
        to="/watchlist"
        end
      >
        Watch List
      </NavLink>
    </nav>
  );
}

export default Header;
