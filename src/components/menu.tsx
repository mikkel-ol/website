import { RefObject } from "react";
import { useMostVisible } from "../hooks/use-most-visible";

export type MenuProps = {
  refs: RefObject<HTMLElement>[];
};

const links = [
  {
    href: "#about",
    text: "About",
  },
  {
    href: "#experience",
    text: "Experience",
  },
  {
    href: "#projects",
    text: "Projects",
  },
];

export const Menu: React.FC<MenuProps> = ({ refs }) => {
  const [_, visibleIndex] = useMostVisible(refs);

  const classes = (index: number) => `text-slate-500 flex items-center ${visibleIndex === index ? "active" : ""}`;

  return (
    <div className="nav font-bold uppercase flex flex-col gap-6">
      {links.map((link, i) => (
        <a key={i} className={classes(i)} href={link.href}>
          <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all"></span>
          <span className="text-xs tracking-widest">{link.text}</span>
        </a>
      ))}
    </div>
  );
};
