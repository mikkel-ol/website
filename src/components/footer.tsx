import { FaHeart } from "react-icons/fa";
import { Link } from "./links/link";

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
