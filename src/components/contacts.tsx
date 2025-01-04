import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from "react-icons/io";
import { IconLink } from "./links/icon-link";

export const Contacts: React.FC = () => {
  return (
    <ul className="text-3xl">
      <li className="flex gap-5">
        <IconLink icon={<IoMdMail />} href="mailto:m@ikkel.dk" />
        <IconLink icon={<IoLogoGithub />} href="https://github.com/mikkel-ol" />
        <IconLink icon={<IoLogoLinkedin />} href="https://www.linkedin.com/in/mikkellaursen" />
      </li>
    </ul>
  );
};
