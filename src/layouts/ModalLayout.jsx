import { Outlet } from 'react-router';

function ModalLayout({ page }) {
  return (
    <>
      {page}
      <Outlet />
    </>
  );
}

export default ModalLayout;
