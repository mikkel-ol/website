import { Outlet } from "react-router-dom";
import { Searchlight } from "../components/searchlight";

export const Layout: React.FC = () => {
  return (
    <>
      <Searchlight />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24 py-12 md:py-20 lg:py-0">
        <Outlet />
      </div>
    </>
  );
};
