import { Outlet } from 'react-router';
import Header from '../components/Header/Header';

function MainLayout() {
  return (
    <>
      <header>
        <Header />
        <h1>Movieboxt</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
