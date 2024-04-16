import { PropsWithChildren } from "react";
import { FaHeart } from "react-icons/fa";

const Link: React.FC<PropsWithChildren<{ href: string }>> = ({ href, children }) => {
  return (
    <a href={href} className="font-bold transition-all hover:text-teal-300" target="_blank">
      {children}
    </a>
  );
};

export const Footer: React.FC = () => {
  return (
    <div className="text-sm text-slate-500 flex flex-col gap-2">
      <p>
        Shamelessly copied from <Link href="https://github.com/bchiang7">Brittany Chiang</Link> and coded in{" "}
        <Link href="https://code.visualstudio.com">Visual Studio Code</Link>. Built with <Link href="https://react.dev">React</Link> and{" "}
        <Link href="https://tailwindcss.com">Tailwind CSS</Link>, deployed with <Link href="https://www.netlify.com">Netlify</Link>.
      </p>

      <p className="flex items-center gap-1">
        Thank you Brittany for a beautiful site <FaHeart className="inline" />
      </p>
    </div>
  );
};
