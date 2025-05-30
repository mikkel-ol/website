import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <div className="mx-auto min-h-screen h-1 max-w-screen-xl px-6 md:px-12 lg:px-24 py-12 md:py-20 lg:py-0">
      <Outlet />
    </div>
  );
};
