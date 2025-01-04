import { PropsWithChildren } from "react";

export type LinkProps = {
  href: string;
  style?: "bright" | "faded";
};

export const Link: React.FC<PropsWithChildren<LinkProps>> = ({ href, style = "faded", children }) => {
  const color = style === "bright" ? "text-slate-200" : "text-slate-400";

  return (
    <a href={href} className={`font-medium transition-all ${color} hover:text-teal-300`} target="_blank">
      {children}
    </a>
  );
};
