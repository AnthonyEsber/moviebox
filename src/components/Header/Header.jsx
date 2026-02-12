import { NavLink } from 'react-router';

function Header() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/watchlist">Watch List</NavLink>
    </nav>
  );
}

export default Header;
