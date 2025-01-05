import { PropsWithChildren } from "react";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";

export type AnimatedLinkProps = {
  href: string;
  external?: boolean;
};

export const AnimatedLink: React.FC<PropsWithChildren<AnimatedLinkProps>> = ({ children, href, external = false }) => {
  return (
    <h3 className="w-fit group mt-8 text-lg text-slate-200 font-bold hover:text-teal-300 focus-visible:text-teal-300 transition-all">
      <Link className="inline-flex flex-col" to={href} target={external ? "_blank" : "_self"}>
        <span className="flex gap-2 items-center">
          {children}
          <TbExternalLink />
        </span>
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-teal-300"></span>
      </Link>
    </h3>
  );
};
