import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <main className="max-w-5xl lg:mx-auto lg:px-0 h-screen">
      <Outlet />
    </main>
  );
};
