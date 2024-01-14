import { PropsWithChildren } from "react";

export const MobileHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="sticky lg:hidden top-0 z-20 -mx-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">{children}</h2>
    </div>
  );
};
