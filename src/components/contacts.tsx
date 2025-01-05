import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from "react-icons/io";
import { IconLink } from "./links/icon-link";

export const Contacts: React.FC = () => {
  return (
    <ul className="text-3xl">
      <li className="flex gap-5">
        <IconLink icon={<IoMdMail />} href="mailto:m@ikkel.dk" aria-label="Send an email" />
        <IconLink icon={<IoLogoGithub />} href="https://github.com/mikkel-ol" aria-label="Github (opens a new tab)" />
        <IconLink icon={<IoLogoLinkedin />} href="https://www.linkedin.com/in/mikkellaursen" aria-label="LinkedIn (opens a new tab)" />
      </li>
    </ul>
  );
};
