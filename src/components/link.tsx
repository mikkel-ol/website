import { PropsWithChildren } from "react";
import { TbExternalLink } from "react-icons/tb";

export type LinkProps = {
  href: string;
  external?: boolean;
};

export const Link: React.FC<PropsWithChildren<LinkProps>> = ({ children, href, external = false }) => {
  return (
    <h3 className="w-fit group mt-8 text-lg text-slate-200 font-bold hover:text-teal-300 focus-visible:text-teal-300 transition-all">
      <a className="inline-flex flex-col" href={href} target={external ? "_blank" : "_self"}>
        <span className="flex gap-2 items-center">
          {children}
          <TbExternalLink />
        </span>
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-teal-300"></span>
      </a>
    </h3>
  );
};
