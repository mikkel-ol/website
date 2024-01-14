import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from "react-icons/io";

export const Contacts: React.FC = () => {
  return (
    <ul className="text-3xl">
      <li className="flex gap-5">
        <Link icon={<IoMdMail />} href="mailto:m@ikkel.dk" />
        <Link icon={<IoLogoGithub />} href="https://github.com/mikkel-ol" />
        <Link icon={<IoLogoLinkedin />} href="https://www.linkedin.com/in/mikkellaursen" />
      </li>
    </ul>
  );
};

type LinkProps = {
  icon: React.ReactElement;
  href: string;
};

const Link: React.FC<LinkProps> = ({ icon, href }) => {
  return (
    <a className="transition-colors hover:text-white" href={href} target="_blank">
      {icon}
    </a>
  );
};
