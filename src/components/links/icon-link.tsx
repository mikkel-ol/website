export type IconLinkProps = {
  icon: React.ReactElement;
  href: string;
};

export const IconLink: React.FC<IconLinkProps> = ({ icon, href }) => {
  return (
    <a className="transition-colors hover:text-white" href={href} target="_blank">
      {icon}
    </a>
  );
};
