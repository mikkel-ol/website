import { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";

export type IconLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  icon: React.ReactElement;
};

export const IconLink: React.FC<IconLinkProps> = (props) => {
  return (
    <Link {...props} className="transition-colors hover:text-white" to={props.href} target="_blank">
      {props.icon}
    </Link>
  );
};
